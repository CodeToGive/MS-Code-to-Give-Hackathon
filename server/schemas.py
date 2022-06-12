from pydantic import BaseModel, EmailStr, constr
from fastapi import UploadFile


class Admin(BaseModel):
    admin_username: constr(max_length=16)
    admin_name: constr(max_length=255)

    class Config:
        orm_mode = True


class AdminCreate(Admin):
    admin_password: str


class AdminLogin(BaseModel):
    admin_username: constr(max_length=16)
    admin_password: str

    class Config:
        orm_mode = True


class User(BaseModel):
    uid: str
    email: EmailStr
    phone_number: int
    address: constr(max_length=255)

    class Config:
        orm_mode = True


class UserCreate(User):
    password: str
    paypal_acc: constr(max_length=16)


class UserLogin(BaseModel):
    uid: str
    password: str

    class Config:
        orm_mode: True


class Document(BaseModel):
    file: UploadFile
    document_name: constr(max_length=20)
    user_id: str
