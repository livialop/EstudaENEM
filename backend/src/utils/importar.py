import requests
import time
from sqlmodel import Session, select

from models.model import Provas, Questoes, Alternativas
from database.database import engine

API_BASE_URL = "https://api.enem.dev/v1"

TIMEOUT = 30

def buscar_api(
    endpoint: str,
    params: dict | None = None,
    tentativas: int = 5
):
    url = f"{API_BASE_URL}{endpoint}"

    for tentativa in range(tentativas):

        response = requests.get(
            url,
            params=params,
            timeout=TIMEOUT
        )

        if response.ok:
            return response.json()

        # tava dando erro por limite de requisicao
        if response.status_code == 429:

            espera = 5 * (tentativa + 1)

            print(
                f"\n[429] Limite da API atingido."
                f" Aguardando {espera}s..."
            )

            time.sleep(espera)

            continue

        # outros erros
        response.raise_for_status()

    raise RuntimeError(
        f"Não foi possível acessar a API após {tentativas} tentativas."
    )


def importar_provas(session: Session):
    """
    Importa todas as provas disponíveis na API.
    """

    print("Buscando provas...")

    provas_api = buscar_api("/exams")

    quantidade = 0

    for prova_api in provas_api:

        ano = prova_api["year"]
        titulo = prova_api["title"]

        # Verifica se a prova já existe
        prova_existente = session.exec(
            select(Provas)
            .where(Provas.ano == ano)
        ).first()

        if prova_existente:
            print(f"[EXISTE] ENEM {ano}")
            continue

        prova = Provas(
            ano=ano,
            titulo=titulo
        )

        session.add(prova)

        quantidade += 1

        print(f"[OK] ENEM {ano}")

    session.commit()

    print(f"\n{quantidade} novas provas importadas.\n")


def importar_questoes_prova(
    session: Session,
    ano: int
):
    """
    Importa todas as questões de uma determinada prova.
    """

    print(f"\nBuscando questões do ENEM {ano}...")

    # Localiza a prova no nosso banco
    prova = session.exec(
        select(Provas)
        .where(Provas.ano == ano)
    ).first()

    if not prova:
        print(f"[ERRO] Prova {ano} não encontrada no banco.")
        return

    offset = 0
    limit = 10

    total_importadas = 0

    while True:

        dados = buscar_api(
            f"/exams/{ano}/questions",
            params={
                "limit": limit,
                "offset": offset
            }
        )

        questoes_api = dados["questions"]
        metadata = dados["metadata"]

        for questao_api in questoes_api:

            numero = questao_api["index"]
            idioma = questao_api.get("language")

            questao_existente = session.exec(
                select(Questoes)
                .where(
                    Questoes.prova_id == prova.id,
                    Questoes.numero == numero,
                    Questoes.idioma == idioma
                )
            ).first()

            if questao_existente:

                print(
                    f"[EXISTE] ENEM {ano} - "
                    f"Questão {numero} "
                    f"({idioma or 'sem idioma'})"
                )

                continue

            questao = Questoes(
                prova_id=prova.id,
                titulo=questao_api["title"],
                numero=numero,
                disciplina=questao_api.get("discipline"),
                idioma=idioma,
                enunciado=questao_api.get("context"),
                introducao=questao_api.get(
                    "alternativesIntroduction"
                ),
                resposta=questao_api["correctAlternative"]
            )

            session.add(questao)

            session.flush()

            for alternativa_api in questao_api["alternatives"]:

                alternativa = Alternativas(
                    questao_id=questao.id,
                    letra=alternativa_api["letter"],
                    texto=alternativa_api.get("text"),
                    arquivo=alternativa_api.get("file"),
                    correta=alternativa_api["isCorrect"]
                )

                session.add(alternativa)

            total_importadas += 1

            print(
                f"[OK] ENEM {ano} - "
                f"Questão {numero}"
            )

        session.commit()

        has_more = metadata.get("hasMore", False)

        if not has_more:
            break

        offset += limit

    print(
        f"\n{total_importadas} novas questões "
        f"importadas do ENEM {ano}."
    )



def importar_tudo():
    with Session(engine) as session:

        importar_provas(session)

        provas = session.exec(
            select(Provas)
            .order_by(Provas.ano)
        ).all()

        
        for prova in provas:

            importar_questoes_prova(
                session,
                prova.ano
            )

    print("terminou o import")
    


if __name__ == "__main__":
    importar_tudo()