from database.database import get_session
from sqlmodel import Session
from fastapi import Depends, HTTPException, status

from ..repositories.user_repository import (
    criar_user, buscar_por_email
)

from ..dto.authDto import UsuarioCreate
from models.model import Usuario
from pwdlib import PasswordHash


# No service ficam as regras de negócio

password_hash = PasswordHash.recommended()


def cadastrar_user(
        dados: UsuarioCreate,
        session: Session = Depends(get_session)) -> Usuario:

    usuario_existe = buscar_por_email(
        email=dados.email,
        session=session
    )

    if usuario_existe:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST,
            detail="E-mail já cadastrado."
        )

    senha_hash = password_hash.hash(dados.senha)

    return criar_user(
        nome=dados.nome,
        email=dados.email,
        senha_hash=senha_hash,
        session=session
    )
    