from email.policy import default
from enum import Enum, unique
from msilib import Table
import uuid

from sqlalchemy import Table as SQLTable, TIMESTAMP, ForeignKey, Integer, String, Column, text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from database import Base


class Users(Base):
    __tablename__ = 'users'

    uid = Column(String, nullable=False, unique=True, primary_key=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    paypal_acc = Column(String, nullable=False, unique=True)
    address = Column(String, nullable=False, unique=True)
    created_at = Column(TIMESTAMP, nullable=False,
                        server_default=text('now()'))


admin_application_association_table = SQLTable(
    "admin_application_association",
    Base.metadata,
    Column("applications_id", ForeignKey("applications.application_id")),
    Column("admins_id", ForeignKey("admins.admin_username"))
)


class AdminApproval(Base):
    __tablename__ = 'admin_approval'
    id = Column(UUID(as_uuid=True), primary_key=True,
                default=uuid.uuid4, unique=True)
    admin = Column("admin_id", ForeignKey("admins.admin_username"))
    application = Column("application_id", ForeignKey(
        "applications.application_id"))
    status = Column(String)


class Applications(Base):
    __tablename__ = 'applications'

    application_id = Column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, nullable=False, unique=True)
    scheme_name = Column(String, nullable=False)
    subscheme_name = Column(String, nullable=False)
    status = Column(String, nullable=False, server_default='pending')
    transactions = Column(Integer)
    user_id = Column(String, ForeignKey('users.uid'))
    admin_id = Column(String, ForeignKey(
        'admins.admin_username'), nullable=True)


class Admins(Base):
    __tablename__ = 'admins'

    admin_username = Column(String, nullable=False,
                            unique=True, primary_key=True)
    admin_name = Column(String, nullable=False)
    admin_password = Column(String, nullable=False)
    admin_email = Column(String, nullable=False)


class Documents(Base):
    __tablename__ = 'documents'

    document_id = Column(Integer, primary_key=True,
                         nullable=False, unique=True)
    document_name = Column(String, nullable=False)
    document_link = Column(String, nullable=False, unique=True)
    submitted_at = Column(TIMESTAMP, nullable=False,
                          server_default=text('now()'))
    user_id = Column(String, ForeignKey('users.uid'))


class Transactions(Base):
    __tablename__ = 'transactions'

    transaction_id = Column(Integer, primary_key=True,
                            nullable=False, unique=True)
    amount = Column(Integer, nullable=False)
    transaction_time = Column(
        TIMESTAMP, nullable=False, server_default=text('now()'))
    user_id = Column(String, ForeignKey('users.uid'))
    admin_id = Column(String, ForeignKey('admins.admin_username'))


class ApplicationAdmin(Base):
    __tablename__ = 'application_admins'

    aadmin_id = Column(Integer, primary_key=True,
                       nullable=False, unique=True)
    application_id = Column(UUID(as_uuid=True), ForeignKey(
        'applications.application_id'))
    admin = Column(String, ForeignKey('admins.admin_username'))


class ApplicationDocs(Base):
    __tablename__ = 'application_docs'

    adoc_id = Column(Integer, primary_key=True,
                     nullable=False, unique=True)
    application_id = Column(UUID(as_uuid=True), ForeignKey(
        'applications.application_id'))
    document_id = Column(Integer, ForeignKey('documents.document_id'))
