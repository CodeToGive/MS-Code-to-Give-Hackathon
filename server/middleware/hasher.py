from passlib.context import CryptContext
pwd_context = CryptContext(schemes=['bcrypt'])


def create_hash(password: str):
    return pwd_context.hash(password)


def verify_hash(attempt: str, stored: str):
  return pwd_context.verify(attempt, stored)

