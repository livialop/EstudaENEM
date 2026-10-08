from sqlmodel import Session, select

from models.model import Questoes


def buscar_questoes(
    session: Session,
    prova_id: int | None = None,
    disciplina: str | None = None,
    idioma: str | None = None,
) -> list[Questoes]:
    consulta = select(Questoes).order_by(Questoes.numero)

    if prova_id is not None:
        consulta = consulta.where(Questoes.prova_id == prova_id)

    if disciplina is not None:
        consulta = consulta.where(Questoes.disciplina == disciplina)

    if idioma is not None:
        consulta = consulta.where(Questoes.idioma == idioma)

    return list(session.exec(consulta).all())