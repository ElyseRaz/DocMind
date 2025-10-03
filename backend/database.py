from databases import Database
from sqlalchemy import create_engine, MetaData
import os
from dotenv import load_dotenv

# Charger les variables d'environnement avec un encodage explicite
load_dotenv(encoding='utf-8')

# URL pour la base de données asynchrone (databases)
ASYNC_DATABASE_URL = "postgresql+asyncpg://postgres:root@localhost:5432/docmind"

# URL pour SQLAlchemy synchrone
SYNC_DATABASE_URL = "postgresql://postgres:root@localhost:5432/docmind"

database = Database(ASYNC_DATABASE_URL)
metadata = MetaData()

engine = create_engine(
    SYNC_DATABASE_URL,
    echo=True,
    connect_args={
        "client_encoding": "utf8",
        "options": "-c client_encoding=utf8"
    }
)