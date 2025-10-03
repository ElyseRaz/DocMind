from database import database
from models import users
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext 
from jose import jwt
import time

load_dotenv()

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
async def register(user: User):
    query=users.select().where(users.c.email==user.email)
    existing_user = await database.fetch_one(query)
    if existing_user:
        raise HTTPException(status_code=400, detail="Utilisateur déjà existant")
    hashed_pwd = pwd_context.hash(user.password)
    query=users.insert().values(username=user.username, email=user.email, hashed_password=hashed_pwd) 
    await database.execute(query)
    return {"message": "Utilisateur enregistré avec succès"}

@router.post("/login")
async def login(user: User):
    query=users.select().where(users.c.email==user.email)
    existing_user = await database.fetch_one(query)
    if not existing_user:
        raise HTTPException(status_code=400, detail="Utilisateur non trouvé")
    if not pwd_context.verify(user.password, existing_user.hashed_password):
        raise HTTPException(status_code=400, detail="Mot de passe incorrect")
    token = create_token(user.email)
    return {"access_token" : token,"username":existing_user.username,"user_id":existing_user.id}