from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.home import home
from .routers.auth import auth
from .routers.users import usuario

app = FastAPI()

# comunicacao com o front 
app.add_middleware(
	CORSMiddleware,
	allow_origins=["http://localhost:3000"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(home.home_router)
app.include_router(auth.auth_router)
app.include_router(usuario.usuario_router)