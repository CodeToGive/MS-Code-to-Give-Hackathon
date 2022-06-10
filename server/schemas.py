from pydantic import BaseModel, EmailStr, constr
from fastapi import UploadFile


class AdminLogin(BaseModel):
    admin_username: constr(max_length=16)
    admin_password: str

    class Config:
        orm_mode = True


class AdminCreate(AdminLogin):
    admin_name: constr(max_length=255)

    class Config:
        orm_mode = True


class User(BaseModel):
    uid: str
    email: EmailStr
    phone: int

    class Config:
        orm_mode = True
