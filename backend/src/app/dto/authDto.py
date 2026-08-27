from pydantic import BaseModel, EmailStr
from sqlmodel import Field
from typing import Literal

class UsuarioCreate(BaseModel):
    email: EmailStr = Field(max_length=255)
    nome: str = Field(max_length=255)
    senha: str
    papel: Literal["admin", "aluno"] = "aluno"


class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str


class UsuarioPublic(BaseModel):
    id: int
    email: EmailStr
    nome: str
    papel: str
    ativo: bool


class LoginResponse(BaseModel):
    message: str
    