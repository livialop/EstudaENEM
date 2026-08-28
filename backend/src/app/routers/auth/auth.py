from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi import APIRouter, Depends, Response

from ...dto.authDto import UsuarioCreate, LoginResponse
from database.database import get_session
from models.model import Usuario
from typing import Annotated
from sqlmodel import Session


from ...services.auth_service import cadastrar_user, autenticar_usuario, pegar_user_autenticado
from ...security.jwt import create_access_token


auth_router = APIRouter(prefix="/auth", tags=["Auth"])
token_schema = OAuth2PasswordBearer(tokenUrl="/auth/login")


@auth_router.post("/cadastro", response_model=Usuario)
def cadastrar_usuario(
    usuario: UsuarioCreate, 
    session: Session = Depends(get_session)
):
    '''Rota de cadastro de novos usuários'''

    return cadastrar_user(
        dados=usuario,
        session=session
    )



@auth_router.post("/login", response_model=LoginResponse)
def login_usuario(
    response: Response,
    session: Session = Depends(get_session), 
    form: OAuth2PasswordRequestForm = Depends()
) -> dict:
    '''Rota de login com JWT'''

    usuario = autenticar_usuario(
        email=form.username,
        senha=form.password,
        session=session
    )

    access_token = create_access_token(
        data={"sub": usuario.email}
    )

    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=False, # pq eu uso http no localhost
        samesite="lax",
        max_age=1800
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }



def get_usuario_logado(
        token: Annotated[str, Depends(token_schema)], 
        session: Session = Depends(get_session)
):
    return pegar_user_autenticado(
        token=token, 
        session=session
    )    