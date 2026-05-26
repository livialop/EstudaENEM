import datetime
from enum import Enum

from sqlmodel import SQLModel, Field
from sqlalchemy import Column, Enum as SAEnum


def utc() -> datetime.datetime:
    '''Retorna a data atual'''
    return datetime.datetime.now(datetime.timezone.utc)

class PapelEnum(str, Enum):
    '''Enum de papel que os usuários podem ser. Utilizado na tabela usuarios.'''
    admin = "admin"
    aluno = "aluno"


class Usuario(SQLModel, table=True):
    '''Tabela de usuarios'''
    __tablename__ = "usuarios"

    id: int = Field(
        primary_key=True,
        default=None,
    )
    email: str = Field(max_length=255)
    senha_hash: str
    nome: str = Field(max_length=255)
    papel: PapelEnum   = Field(
        sa_column=Column(SAEnum(PapelEnum, native_enum=True)),
        default=PapelEnum.aluno
    )
    ativo: bool = Field(default=True)
    criado_em: datetime.datetime = Field(default_factory=utc)
    atualizado_em: datetime.datetime = Field(default_factory=utc)
