import datetime
from enum import Enum
from typing import Optional, List

from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Enum as SAEnum, UniqueConstraint, Text


def utc() -> datetime.datetime:
    '''Retorna a data atual'''
    return datetime.datetime.now(datetime.timezone.utc)

class PapelEnum(str, Enum):
    '''Enum de papel que os usuários podem ser. Utilizado na tabela usuarios.'''
    admin = "admin"
    aluno = "aluno"


# --------- TABELA USUÁRIO ----------

class Usuario(SQLModel, table=True):
    '''Tabela de usuarios'''
    __tablename__ = "usuarios"

    id: int | None = Field(
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

    respostas_usuario: List["Respostas_Usuario"] = Relationship(back_populates="usuario")


# --------- TABELAS P/ QUESTOES E PROVAS ---------

class Provas(SQLModel, table=True):
    '''Tabela para as provas do ENEM'''
    __tablename__ = "provas"
    
    id: int | None = Field(
        primary_key=True,
        default=None
    )
    ano: int = Field(unique=True)
    titulo: str = Field(max_length=100)

    questoes: List["Questoes"] = Relationship(back_populates="provas")


class Questoes(SQLModel, table=True):
    '''Tabela para as questões da prova do ENEM'''
    __tablename__ = "questoes"
    __table_args__ = (
        UniqueConstraint("prova_id", "numero", "idioma", name="uq_questoes_prova_numero_idioma"),
    )

    id: int | None = Field(
        primary_key=True,
        default=None
    )

    prova_id: int | None = Field(
        default=None,
        foreign_key="provas.id"
    ) 

    titulo: str 
    numero: int
    disciplina: str | None = Field(default=None, max_length=100)
    idioma: str | None = Field(max_length=50)
    enunciado: str | None = Field(default=None, sa_column=Column(Text))
    introducao: str | None = Field(default=None, sa_column=Column(Text))
    resposta: str = Field(max_length=1)


    provas: Optional["Provas"] = Relationship(back_populates="questoes")
    
    alternativas: List["Alternativas"] = Relationship(back_populates="questao")
    respostas_usuario: List["Respostas_Usuario"] = Relationship(back_populates="questao")


class Alternativas(SQLModel, table=True):
    '''Tabela p/ alternativas das questões'''
    __tablename__ = "alternativas"

    __table_args__ = (
        UniqueConstraint(
            "questao_id",
            "letra",
            name="uq_alternativa_questao_letra"
        ),
    )

    id: int | None = Field(
        primary_key=True,
        default=None
    )

    questao_id: int | None = Field(
        default=None,
        foreign_key="questoes.id"
    )

    letra: str = Field(max_length=1)
    texto: str | None = Field(default=None, sa_column=Column(Text))
    arquivo: str | None = Field(default=None)
    correta: bool
    
    questao: Optional["Questoes"] = Relationship(back_populates="alternativas")


# ---------- TABELA P/ COISAR O DESEMPENHO QND A GNT FOR FAZER -------------
class Respostas_Usuario(SQLModel, table=True):
    '''Tabela para fazer as contas do desempenho do usuário posteriormente'''
    __tablename__ = "respostas_usuario"


    id: int | None = Field(
        primary_key=True,
        default=None
    )

    usuario_id: int | None = Field(
        default=None,
        foreign_key="usuarios.id"
    )

    questao_id: int | None = Field(
        default=None,
        foreign_key="questoes.id"
    )

    resposta: str = Field(max_length=1)
    acertou: bool
    data_resposta: datetime.datetime = Field(default_factory=utc)

    usuario: Optional["Usuario"] = Relationship(back_populates="respostas_usuario")
    questao: Optional["Questoes"] = Relationship(back_populates="respostas_usuario")

