from fastpi import Depends, HTTPException
from fastapi.security import HTTPBearer
from jose import jwt, JWTError

SECRET_KEY = "MON_SECRET"
ALGORITHM = "HS256"

security = HTTPBearer()

def verify_token(token: str = Depends(security)):
    try:
        payload = jwt.decode(token.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Token invalide")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Token invalide")