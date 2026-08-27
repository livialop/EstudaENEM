from fastapi import Depends
from sqlmodel import Session, select
from models.model import Usuario
from database.database import get_session

# Repository serve para acesso ao banco

#TODO: ver onde colocar validações nas camadas 


def buscar_por_email(email: str, 
                     session: Session = Depends(get_session)) -> Usuario | None:
    return session.scalar(
        select(Usuario).where(Usuario.email == email)
    )

def criar_user(nome: str, 
               email: str, 
               senha_hash: str, 
               session: Session = Depends(get_session)) -> Usuario:
    usuario = Usuario(
        nome=nome,
        email=email,
        senha_hash=senha_hash
    )

    session.add(usuario)
    session.commit()
    session.refresh(usuario)

    return usuario
    
