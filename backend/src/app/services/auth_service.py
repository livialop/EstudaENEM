from database.database import get_session
from sqlmodel import Session
from fastapi import Depends, HTTPException, status

from ..repositories.user_repository import (
    criar_user, buscar_por_email
)

from ..dto.authDto import UsuarioCreate
from ..security.jwt import decode_access_token
from models.model import Usuario
from pwdlib import PasswordHash

from typing import Annotated
from os import getenv
import jwt


# No service ficam as regras de negócio

password_hash = PasswordHash.recommended()
JWT_SECRET_KEY = getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = getenv("JWT_ALGORITHM")

def cadastrar_user(
        dados: UsuarioCreate,
        session: Session = Depends(get_session)
) -> Usuario:

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


def autenticar_usuario(
        email: str, 
        senha: str, 
        session: Session = Depends(get_session)
) -> Usuario:

    usuario = buscar_por_email(
        email=email,
        session=session
    )

    if not usuario:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Credenciais inválidas."
        )

    if not password_hash.verify(
        senha, usuario.senha_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Credenciais inválidas."
        )

    return usuario



def pegar_user_autenticado(
        token: str,
        session: Session = Depends(get_session)
) -> Usuario:

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Sem permissão.",
        headers={"WWW-Authenticate": "Bearer"}
    )

    try:
        payload = decode_access_token(token)

        email = payload.get('sub')

        if not email:
            raise credentials_exception

        usuario = buscar_por_email(
            email=email,
            session=session
        )

        if not usuario:
            raise credentials_exception

        return usuario

    except jwt.PyJWTError:
        raise credentials_exception
