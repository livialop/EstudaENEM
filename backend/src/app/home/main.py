from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def main():
    return {"message": "Bem-vindo à página inicial do Estuda ENEM!"}
@app.get("/home")
def home():
    return {"message": "Dashboard do Estuda ENEM"}
