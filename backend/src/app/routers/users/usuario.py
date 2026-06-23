from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlmodel import Session, select

from database.database import get_session
from models.model import Usuario
from dto.usuariosDto import UsuarioResponse, UsuarioUpdate
from app.routers.auth.auth import get_usuario_logado

usuario_router = APIRouter(prefix="/usuario", tags=["Usuario"])


@usuario_router.get("/me", response_model=UsuarioResponse)
def get_usuario_atual(usuario: Usuario = Depends(get_usuario_logado)):
	"""Retorna os dados do usuário autenticado"""
	return usuario


@usuario_router.patch("/me", response_model=UsuarioResponse)
def atualizar_usuario(
	dados: UsuarioUpdate,
	session: Session = Depends(get_session),
	usuario: Usuario = Depends(get_usuario_logado),
):
	"""Atualiza informações do usuário autenticado. Não permite alterar o email"""
	if dados.email and dados.email != usuario.email:
		raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Não é permitido alterar o email.")

	updated = False
	if dados.nome is not None:
		usuario.nome = dados.nome
		updated = True

	if updated:
		try:
			session.add(usuario)
			session.commit()
			session.refresh(usuario)
		except Exception:
			session.rollback()
			raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Erro ao atualizar usuário.")

	return usuario


@usuario_router.delete("/{email}", status_code=status.HTTP_204_NO_CONTENT)
def deletar_usuario(
	email: str,
	session: Session = Depends(get_session),
	usuario_logado: Usuario = Depends(get_usuario_logado),
):
	"""Deleta o usuário pelo email"""
	
    # so admin e o user podem deletar
	if usuario_logado.papel != "admin" and usuario_logado.email != email:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Permissão negada para deletar este usuário.")


	usuario = session.scalar(select(Usuario).where(Usuario.email == email))
	if not usuario:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Usuário não encontrado.")

	try:
		session.delete(usuario)
		session.commit()
	except Exception:
		session.rollback()
		raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Erro ao deletar usuário.")

	return Response(status_code=status.HTTP_204_NO_CONTENT)

