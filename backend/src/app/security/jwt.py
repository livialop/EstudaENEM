from datetime import datetime, timedelta, timezone
from os import getenv
import jwt

JWT_EXPIRES_MIN = getenv("JWT_EXPIRES_MIN")
JWT_SECRET_KEY = getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = getenv("JWT_ALGORITHM")

def create_access_token(data: dict) -> str:
    '''Access token do auth JWT (estou usando o PyJWT)'''

    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=int(JWT_EXPIRES_MIN))
    to_encode.update({"exp": expire})
    token = jwt.encode(
        to_encode,
        key=JWT_SECRET_KEY,
        algorithm=JWT_ALGORITHM
    )

    return token


def decode_access_token(token: str) -> dict:
    return jwt.decode(
        token,
        key=JWT_SECRET_KEY,
        algorithms=[JWT_ALGORITHM]
    )