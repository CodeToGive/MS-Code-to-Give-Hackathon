from statistics import mode
from sys import prefix
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from schemas import User, UserLogin, Document, Application, ApplicationReq
from middleware.hasher import create_hash, verify_hash
from middleware.oauth2 import create_access_token, verify_user_token, verify_admin_token
import models

request_router = APIRouter(
    tags=['Requests'],
    prefix='/requests'
)


@request_router.post('/aid')
def aid_request(creds: Application, db: Session = Depends(get_db), verify=Depends(verify_user_token)):
    req = models.Applications(**creds.dict())
    db.add(req)
    db.commit()
    return req


@request_router.get('/all')
def fetch_all_request(db: Session = Depends(get_db), verify=Depends(verify_admin_token)):
    reqs = db.query(models.Applications).all()
    return reqs


@request_router.get('/all_u')
def fetch_all_request(db: Session = Depends(get_db), verify=Depends(verify_user_token)):
    uid = verify
    reqs = db.query(models.Applications).filter(
        models.Applications.user_id == uid).all()
    return reqs


@request_router.post('/update_req')
def update_request(creds: ApplicationReq, db: Session = Depends(get_db), verify=Depends(verify_admin_token)):
    admin = db.query(models.Admins).filter(
        models.Admins.admin_username == verify)
    application = db.query(models.Applications).filter(
        models.Applications.application_id == creds.application_id).first()

    if not admin:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='admin not found!')
    elif not application:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='application not found'
        )
    if application.status != "pending":
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail='Already Accepted or Rejected'
        )

    application.status = creds.status
    application.admin_id = verify

    db.commit()
    return application

