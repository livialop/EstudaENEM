from fastapi import APIRouter, HTTPException, Depends, status
from datetime import datetime, timedelta, timezone

from models.model import Usuario
from dto.authDto import UsuarioCreate, UsuarioLogin, LoginResponse, UsuarioPublic
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer

from sqlmodel import select
from sqlmodel import Session

from database.database import get_session

from os import getenv
from pwdlib import PasswordHash
from typing import Annotated
import jwt


token_schema = OAuth2PasswordBearer(tokenUrl="token")
auth_router = APIRouter(prefix="/auth", tags=["Auth"])
password_hash = PasswordHash.recommended()


JWT_SECRET_KEY = getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = getenv("JWT_ALGORITHM")
JWT_EXPIRES_MIN = int(getenv("JWT_EXPIRES_MIN"))


def create_access_token(data: dict) -> str:
    '''Access token do auth JWT (estou usando o PyJWT)'''
    to_encode = data.copy() 
    expire = datetime.now() + timedelta(minutes=JWT_EXPIRES_MIN)
    to_encode.update({"exp": expire})
    token = jwt.encode(
        to_encode, key=JWT_SECRET_KEY, algorithm=JWT_ALGORITHM
    )
    return token

@auth_router.post("/cadastro", response_model=Usuario)
def cadastrar_usuario(usuario: UsuarioCreate, session: Session = Depends(get_session)):
    '''Rota de cadastro de novos usuários'''
    
    usuario_existe = session.exec(
        select(Usuario).where(Usuario.email == usuario.email)
    ).first()

    if usuario_existe:
        raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="E-mail já cadastrado.")
    
    novo_user: Usuario = Usuario(
        nome=usuario.nome,
        email=usuario.email,
        senha_hash=password_hash.hash(usuario.senha)
    )

    session.add(novo_user)

    try:
        session.commit()
    except Exception as e:
        print(e)
        session.rollback()
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Erro ao criar usuário.")

    return novo_user


def get_usuario_logado(token: Annotated[str, Depends(token_schema)], session: Session = Depends(get_session)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Sem permissão",
        headers={"WWW-Authenticate": "Bearer"}
    )

    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGORITHM])
        email = payload.get('sub')

        if not email:
            raise credentials_exception
        
        usuario = session.scalar(
            select(Usuario).where(
                Usuario.email == email
            )
        )

        if not usuario:
            raise credentials_exception
        
        return usuario

    except Exception:
        raise credentials_exception


@auth_router.post("/login", response_model=LoginResponse)
def login_usuario(session: Session = Depends(get_session), form: OAuth2PasswordRequestForm = Depends()):
    '''Rota de login com JWT'''
    usuario = session.scalar(
        select(Usuario).where(
            Usuario.email == form.username
        )
    )

    if not usuario:
        raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="Credenciais inválidas.")
    if not password_hash.verify(form.password, usuario.senha_hash):
        raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="Credenciais inválidas.")
    
    access_token = create_access_token(
        data={
            'sub': usuario.email
        }
    )

    return {
        'access_token': access_token,
        'token_type': 'bearer',
        'usuario': usuario
    }