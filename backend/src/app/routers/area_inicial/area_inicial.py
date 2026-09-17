from fastapi import APIRouter, Depends
from models.model import Usuario
from app.routers.auth.auth import get_usuario_logado

area_ini_router = APIRouter(prefix="", tags=["Área Inicial"])

@area_ini_router.get("/area_inicial")
def area_inicial(
    current_user: Usuario = Depends(get_usuario_logado)
):
    return {
        "message": "Acessou a área inicial",
        "usuario": current_user
    }