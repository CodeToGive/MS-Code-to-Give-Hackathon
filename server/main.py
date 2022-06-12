from fastapi import FastAPI
import models
from database import engine
from routers import admin, user

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(admin.admin_router)
app.include_router(user.user_router)
