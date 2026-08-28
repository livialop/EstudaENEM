from ..repositories.user_repository import atualizar
from ..dto.usuariosDto import UsuarioUpdate
from fastapi import HTTPException, status
from models.model import Usuario
from sqlmodel import Session

from ..repositories.user_repository import buscar_por_email

def atualizar_usuario_service(
        dados: UsuarioUpdate,
        usuario: Usuario,
        session: Session
) -> Usuario:

    if dados.nome is not None:
        usuario.nome = dados.nome

    return atualizar(
        usuario=usuario,
        session=session
    )

def inativar_usuario_service(
        email: str,
        usuario: Usuario,
        session: Session 
) -> Usuario:

    if usuario.email != email:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Permissão negada."
        )

    usuario_para_inativar = buscar_por_email(
        email=email,
        session=session
    )

    if not usuario_para_inativar:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Usuário não encontrado"
        )

    usuario.ativo = False

    return atualizar(
        usuario=usuario,
        session=session
    )
