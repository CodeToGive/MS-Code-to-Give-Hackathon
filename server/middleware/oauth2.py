#from os import environ
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/login')

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


def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        content = jwt.decode(token, TOKEN_SECRET, algorithms=[ALGORITHM])

        if not content:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
    return content
