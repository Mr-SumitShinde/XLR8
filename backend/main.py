from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.authentication import generate_and_save_access_token, get_user_details,get_access_token
from credential import FyersCredentials
app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}

def authenticate_and_get_user_details():
    access_token = generate_and_save_access_token(FyersCredentials)
    if access_token:
        user_details = get_user_details(FyersCredentials.client_id, access_token)
        if user_details:
            return user_details

    return None

@app.get("/authenticate")
def authenticate_user():
    result = authenticate_and_get_user_details()
    if result:
        return result
    else:
        return {"Login failed"}

@app.get("/getUserDetails")
def user_details():
    access_token = get_access_token()
    user_details = get_user_details(FyersCredentials.client_id, access_token)
    
    if user_details:
        return user_details
    else:
        # If user_details is not available, attempt to authenticate and get user details
        result = authenticate_and_get_user_details()
        if result:
            return result
        else:
            return {"Login failed"}

