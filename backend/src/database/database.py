from sqlmodel import create_engine, Session
from os import getenv
from sqlalchemy import URL
from dotenv import load_dotenv

load_dotenv()

DB = URL.create(
    drivername="mysql+pymysql",
    username=getenv("DB_USERNAME"),
    password=getenv("DB_PASSWORD"),
    host=getenv("DB_HOST"),
    port=getenv("DB_PORT"),\
    database=getenv("DB_NAME")
)

engine = create_engine(DB)

def get_session():
    with Session(engine) as session:
        yield session

