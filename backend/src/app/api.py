from fastapi import FastAPI
from .routers.home import home
from .routers.auth import auth

app = FastAPI()

app.include_router(home.home_router)
app.include_router(auth.auth_router)