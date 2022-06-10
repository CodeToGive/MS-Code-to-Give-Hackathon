from passlib.context import CryptContext
pwd_context = CryptContext(schemes=['bcrypt'])


def hash(password: str):
    return pwd_context.hash(password)


def verify(attempt: str, stored: str):
    return pwd_context.verify(attempt, stored)
