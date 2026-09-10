from pydantic import BaseModel, EmailStr
from typing import Optional, Literal


class UsuarioResponse(BaseModel):
    id: int
    email: EmailStr
    nome: str
    papel: Literal["admin", "aluno"]
    ativo: bool


class UsuarioUpdate(BaseModel):
    nome: Optional[str] = None
    email: Optional[EmailStr] = None