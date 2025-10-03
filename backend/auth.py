from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext 
from jose import jwt
import time

router = APIRouter()

SECRET_KEY ="MON_SECRET_KEY"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

users_db = {}

class User(BaseModel):
    username:str
    email:str
    password:str
    

def create_token(email: str):
    payload={
        "sub": email,
        "exp": time.time() + 6000}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

@router.post("/register")
def register(user: User):
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="Utilisateur déjà existant")
    hashed_pwd = pwd_context.hash(user.password)
    users_db[user.email] = {"email": user.email, "password": hashed_pwd, "username": user.username}
    return {"msg": "Utilisateur enregistré avec succès"}

@router.post("/login")
def login(user: User):
    if user.email not in users_db:
        raise HTTPException(status_code=400, detail="Utilisateur non trouvé")
    hashed_pwd = users_db[user.email]
    if not pwd_context.verify(user.password,hashed_pwd):
        raise HTTPException(status_code=400, detail="Mot de passe incorrect")
    token = create_token(user.email)
    return {"access_token" : token}