from fastapi import APIRouter

sobre_nos_router = APIRouter(prefix="", tags=["Sobre Nós"])

@sobre_nos_router.get("/sobre_nos")
def sobre_nos():
    return {
        "message": "Acessou a página Sobre Nós"
    }