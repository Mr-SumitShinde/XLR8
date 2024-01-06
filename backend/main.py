from fastapi import FastAPI
from app.api.authentication import generate_and_save_access_token, get_user_details
from credential import FyersCredentials
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}

@app.get("/authenticate")
def read_root():
    access_token = generate_and_save_access_token(FyersCredentials)
    if(access_token):
        user_details = get_user_details(FyersCredentials.client_id, access_token)
        if(user_details):
            return user_details

    return {"Login failed"}
