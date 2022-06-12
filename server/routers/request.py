from sys import prefix
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from schemas import User, UserLogin, Document
from middleware.hasher import create_hash, verify_hash
from middleware.oauth2 import create_access_token, verify_user_token, verify_admin_token
import models

request_router = APIRouter(
    tags=['Requests'],
    prefix='/requests'
)

# @request_router.post('/aid' )
# def aid_request(creds:Applications)