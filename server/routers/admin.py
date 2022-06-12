from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from schemas import AdminLogin, AdminCreate, UserCreate, User, Admin
from middleware.hasher import verify_hash, create_hash
from middleware.oauth2 import create_access_token, verify_token
import models

admin_router = APIRouter(
    tags=['Admin'],
    prefix='/admins'
)


@admin_router.post('/login')
def admin_login(creds: AdminLogin, db: Session = Depends(get_db)):
    admin = db.query(models.Admins).filter(
        models.Admins.admin_username == creds.admin_username).first()

    if not admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    if not verify_hash(creds.admin_password, admin.admin_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    token = create_access_token({'admin_username': creds.admin_username})

    return {'admin_access_token': token, 'token_type': 'bearer_token'}



@admin_router.post('/create_admin', response_model=Admin)
def create_admin(creds: AdminCreate, db: Session = Depends(get_db), verif=Depends(verify_token)):

    creds.admin_password = create_hash(creds.admin_password)
    new_admin = models.Admins(**creds.dict())

    if db.query(models.Admins).filter(models.Admins.admin_username == creds.admin_username).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail='user already registerd!')
    db.add(new_admin)
    db.commit()

    return new_admin


@admin_router.get('/get_admins', response_model=List[Admin])
def get_admins(db: Session = Depends(get_db), verif=Depends(verify_token)):
    admins = db.query(models.Admins).all()

    return admins


@admin_router.get('/get_current_user', response_model=Admin)
def get_current_user(db: Session = Depends(get_db), verif=Depends(verify_token)):
    username = verif.get('uid')
    admin = db.query(models.Admins).filter(
        models.Admins.admin_username == username).one_or_none()

    return admin


@admin_router.post('/create_user', response_model=User)
def create_user(creds: UserCreate, db: Session = Depends(get_db), verif=Depends(verify_token)):
    creds.password = create_hash(creds.password)
    new_user = models.Users(**creds.dict())

    if db.query(models.Users).filter(models.Users == creds).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail='user already registerd!')

    db.add(new_user)
    db.commit()

    return new_user


@admin_router.get('/get_user/{uid}', response_model=User)
def get_user(uid: str, db: Session = Depends(get_db), verif=Depends(verify_token)):
    user = db.query(models.Users).filter(models.Users.uid == uid).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='user not found!')
    return user
