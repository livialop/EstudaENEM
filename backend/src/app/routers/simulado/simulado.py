from fastapi import APIRouter, Depends
from sqlmodel import Session

from ...dto.simuladoDto import AlternativaResponse, QuestaoResponse
from ...repositories.simulado_repository import buscar_questoes
from database.database import get_session


simulado_router = APIRouter(prefix="/simulado", tags=["Simulado"])


@simulado_router.get("", response_model=list[QuestaoResponse])
def listar_questoes(
	prova_id: int | None = None,
	disciplina: str | None = None,
	idioma: str | None = None,
	session: Session = Depends(get_session),
) -> list[QuestaoResponse]:
	questoes = buscar_questoes(
		session=session,
		prova_id=prova_id,
		disciplina=disciplina,
		idioma=idioma,
	)

	resposta = []
	for questao in questoes:
		alternativas = [
			AlternativaResponse(
				letra=alternativa.letra,
				texto=alternativa.texto,
				img=alternativa.arquivo,
				correta=alternativa.correta,
			)
			for alternativa in sorted(questao.alternativas, key=lambda item: item.letra)
		]

		alternativa_correta = next(
			(
				alternativa
				for alternativa in alternativas
				if alternativa.letra == questao.resposta or alternativa.correta
			),
			None,
		)

		resposta.append(
			QuestaoResponse(
				id=questao.id,
				titulo=questao.titulo,
				numero=questao.numero,
				disciplina=questao.disciplina,
				idioma=questao.idioma,
				introducao=questao.introducao,
				enunciado=questao.enunciado,
				alternativas=alternativas,
				alternativa_correta=alternativa_correta,
			)
		)

	return resposta
