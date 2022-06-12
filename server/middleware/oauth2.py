#from os import environ
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

oauth2_scheme_user = OAuth2PasswordBearer(tokenUrl='/users/login')
oauth2_scheme_admin = OAuth2PasswordBearer(tokenUrl='/admins/login')

# environ['TOKEN_SECRET']
TOKEN_SECRET = 'dfa190f58ccc87b1d0b3dd54ede4117077c770355e4cdd1c4fd3581d3e3d6bc1871439002824c0cb'
ALGORITHM = 'HS256'
TOKEN_EXPIRE_MINUTES = 30


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow()+timedelta(minutes=TOKEN_EXPIRE_MINUTES)
    to_encode.update({'exp': expire})

    encoded = jwt.encode(to_encode, TOKEN_SECRET, algorithm=ALGORITHM)

    return encoded


def verify_admin_token(token: str = Depends(oauth2_scheme_admin)):
    try:
        content = jwt.decode(token, TOKEN_SECRET, algorithms=[ALGORITHM])
        username = content.get('admin_username')
        if not username:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    return username


def verify_user_token(token: str = Depends(oauth2_scheme_user)):
    try:
        content = jwt.decode(token, TOKEN_SECRET, algorithms=[ALGORITHM])
        uid = content.get('uid')

        if not uid:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    return uid
