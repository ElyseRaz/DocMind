from database import engine, metadata
import models  # Importez les modèles pour qu'ils soient enregistrés

metadata.create_all(engine)
print("Tables créées avec succès")