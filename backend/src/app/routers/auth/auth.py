from fastapi import APIRouter, HTTPException, Depends, status
from os import getenv
from datetime import datetime, timedelta, timezone
import jwt
from models.model import Usuario
from dto.authDto import UsuarioCreate, UsuarioLogin, LoginResponse, UsuarioPublic

from sqlmodel import select
from sqlmodel import Session

from database.database import get_session

from pwdlib import PasswordHash



auth_router = APIRouter(prefix="/auth", tags=["Auth"])
password_hash = PasswordHash.recommended()


JWT_SECRET_KEY = getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = getenv("JWT_ALGORITHM")
JWT_EXPIRES_MIN = int(getenv("JWT_EXPIRES_MIN"))


def create_access_token(subject: str, claims: dict) -> str:
    '''Access token do auth JWT (estou usando o PyJWT)'''
    now = datetime.now(timezone.utc)
    payload = {
        "sub": subject,
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=JWT_EXPIRES_MIN)).timestamp()),
        **claims,
    }
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)


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



@auth_router.post("/login", response_model=LoginResponse)
def login_usuario(
    loginusuario: UsuarioLogin,
    session: Session = Depends(get_session),
):
    '''Rota de login com JWT'''

    usuario_db = session.exec(
        select(Usuario).where(Usuario.email == loginusuario.email)
    ).first()

    if not usuario_db or not usuario_db.ativo:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="Credenciais invalidas.")

    if not password_hash.verify(loginusuario.senha, usuario_db.senha_hash):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="Credenciais invalidas.")

    access_token = create_access_token(
        subject=str(usuario_db.id),
        claims={"email": usuario_db.email, "papel": str(usuario_db.papel)},
    )

    usuario_publico = UsuarioPublic(
        id=usuario_db.id,
        email=usuario_db.email,
        nome=usuario_db.nome,
        papel=str(usuario_db.papel),
        ativo=usuario_db.ativo,
    )

    return LoginResponse(access_token=access_token, usuario=usuario_publico)