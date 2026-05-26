from sqlmodel import create_engine, Session, SQLModel
from os import getenv
from sqlalchemy import URL, text
from dotenv import load_dotenv
import models.model

load_dotenv()

DB = URL.create(
    drivername="mysql+pymysql",
    username=getenv("DB_USERNAME"),
    password=getenv("DB_PASSWORD"),
    host=getenv("DB_HOST"),
    port=getenv("DB_PORT"),
    database=getenv("DB_NAME")
)

engine = create_engine(DB)

def get_session():
    with Session(engine) as session:
        yield session

def create_db(DB: URL):
    if not DB.database:
        return
    
    server_url = URL.create(
        drivername=DB.drivername,
        username=DB.username,
        password=DB.password,
        host=DB.host,
        port=DB.port,
        database=None
    )

    server_engine = create_engine(server_url)

    with server_engine.connect() as conn:
        conn.execute(
            text(f"CREATE DATABASE IF NOT EXISTS {DB.database}")
        )
    
    engine = create_engine(DB)
    SQLModel.metadata.create_all(engine)