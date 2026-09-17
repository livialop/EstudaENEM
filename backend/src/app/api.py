from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.home import home
from .routers.auth import auth
from .routers.users import usuario
from .routers.area_inicial import area_inicial
from .routers.sobre_nos import sobre_nos

app = FastAPI()

# comunicacao com o front 
app.add_middleware(
	CORSMiddleware,
	# During development allow all origins; in production restrict this.
	allow_origins=[
        "http://localhost:5173"
	],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(area_inicial.area_ini_router)
app.include_router(home.home_router)
app.include_router(auth.auth_router)
app.include_router(usuario.usuario_router)
app.include_router(sobre_nos.sobre_nos_router)