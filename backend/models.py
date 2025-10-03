from sqlalchemy import Table, Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from database import metadata

users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("username", String(50), nullable=False),
    Column("email", String(100), unique=True, nullable=False),
    Column("hashed_password", String(255), nullable=False),
    Column("created_at", DateTime(timezone=True), server_default=func.now()),
)

history = Table(  # Changé de 'users' à 'history'
    "history",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("user_id", Integer, ForeignKey("users.id"), nullable=False),
    Column("file_name", String(255), nullable=False),
    Column("file_type", String(50), nullable=False),
    Column("summary", Text, nullable=False),
    Column("created_at", DateTime(timezone=True), server_default=func.now()),
)