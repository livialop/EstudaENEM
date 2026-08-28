from fastapi import APIRouter, Depends, status
from sqlmodel import Session

from database.database import get_session
from models.model import Usuario
from ...dto.usuariosDto import UsuarioResponse, UsuarioUpdate
from app.routers.auth.auth import get_usuario_logado

from ...services.user_service import atualizar_usuario_service, inativar_usuario_service

usuario_router = APIRouter(prefix="/usuarios", tags=["Usuario"])


@usuario_router.get("/me", response_model=UsuarioResponse)
def get_usuario_atual(
	usuario: Usuario = Depends(get_usuario_logado)
) -> Usuario:
	"""Retorna os dados do usuário autenticado"""
	return usuario


@usuario_router.patch("/me", response_model=UsuarioResponse)
def atualizar_usuario(
	dados: UsuarioUpdate,
	session: Session = Depends(get_session),
	usuario: Usuario = Depends(get_usuario_logado),
):
	"""Atualiza informações do usuário autenticado. Não permite alterar o email"""
	return atualizar_usuario_service(
		dados=dados,
		usuario=usuario,
		session=session
	)	


@usuario_router.patch("/inativar/{email}", status_code=status.HTTP_204_NO_CONTENT)
def inativar_usuario(
	email: str,
	session: Session = Depends(get_session),
	usuario_logado: Usuario = Depends(get_usuario_logado),
):

	#TODO: depois que inativa, o usuario deve se deslogar automaticamente e nao deve conseguir logar mais
	"""Inativa o usuário pelo email"""
	inativar_usuario_service(
		email=email,
		usuario=usuario_logado,
		session=session
	)