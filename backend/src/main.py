import uvicorn
from database.database import DB

if __name__ == "__main__":
    # create_db(DB)
    uvicorn.run("app.api:app", host="0.0.0.0", port=8080)