from fastapi import APIRouter

home_router = APIRouter(prefix="", tags=["Homepage"])

@home_router.get("/")
def main():
    return {"message": "Bem-vindo à página inicial do Estuda ENEM!"}

@home_router.get("/home")
def home():
    return {"message": "Dashboard do Estuda ENEM"}
