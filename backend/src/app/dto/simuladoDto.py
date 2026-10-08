from pydantic import BaseModel, ConfigDict


class AlternativaResponse(BaseModel):
    letra: str
    texto: str | None = None
    img: str | None = None
    correta: bool


class QuestaoResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    titulo: str
    numero: int
    disciplina: str | None = None
    idioma: str | None = None
    introducao: str | None = None
    enunciado: str | None = None
    alternativas: list[AlternativaResponse]
    alternativa_correta: AlternativaResponse | None = None