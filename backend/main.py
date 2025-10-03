from fastapi import FastAPI, Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from auth import router as auth_router
from resume import router as resume_router
from database import database

app = FastAPI(title)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5713"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
) 

@app.get("/")
def root():
    return {"message":"Backend is running"}

app.include_router(auth_router,prefix="/auth")