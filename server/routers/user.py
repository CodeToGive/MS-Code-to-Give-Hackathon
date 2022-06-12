from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from schemas import User, UserLogin, Document
from middleware.hasher import create_hash, verify_hash
from middleware.oauth2 import create_access_token, verify_user_token
import models

user_router = APIRouter(
    tags=['Users'],
    prefix='/users'
)


@user_router.post('/login')
def login(creds: UserLogin, db: Session = Depends(get_db)):
    hashed_attempt = create_hash(creds.password)
    user = db.query(models.Users).filter(
        models.Users.uid == creds.uid).one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='User not found!')
    user_id = user.uid
    pwd = user.password
    if not user_id == creds.uid or verify_hash(hashed_attempt, pwd):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid credentials')

    token = create_access_token({"uid": creds.uid})
    return {'user_access_token': token, 'token_type': 'bearer_token'}


@user_router.get('/get_current_user', response_model=User)
def get_current_user(db: Session = Depends(get_db), verif=Depends(verify_user_token)):
    uid = verif
    user = db.query(models.Users).filter(models.Users.uid == uid).one_or_none()

    return user


@user_router.post('/upload')
def upload_docs(docs: List[Document], verif=Depends(verify_user_token)):
    for document in docs:
        print(document.document_name)
