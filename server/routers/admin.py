from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from schemas import AdminLogin, AdminCreate
from middleware.hasher import verify, hash
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

    if not verify(creds.admin_password, admin.admin_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    token = create_access_token({'admin_username': creds.admin_username})

    return {'access_token': token, 'token_type': 'bearer_token'}


@admin_router.post('/create_admin')
def create_admin(creds: AdminCreate, db: Session = Depends(get_db), verif=Depends(verify_token)):

    creds.admin_password = hash(creds.admin_password)
    new_admin = models.Admins(**creds.dict())

    if db.query(models.Admins).filter(models.Admins.admin_username == creds.admin_username).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail={
                            'detail': 'user already registerd!'})
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    return {'detail': 'admin succesfully added'}
