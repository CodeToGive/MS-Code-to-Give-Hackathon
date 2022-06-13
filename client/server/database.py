from urllib.parse import quote
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from os import environ

SQLALCHEMY_DATABASE_URL = 'postgresql://postgres:%s@localhost/dev' % quote(
    environ["POSTGRES_PASS"])

engine = create_engine(SQLALCHEMY_DATABASE_URL)

local_session = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()


def get_db():
    db = local_session()

    try:
        yield db
    finally:
        db.close()
