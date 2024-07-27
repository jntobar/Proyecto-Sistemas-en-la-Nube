# backend/Dockerfile
FROM python:3.9-slim

# Crear un directorio de trabajo
WORKDIR /app

# Copiar el archivo de requisitos y luego instalar las dependencias
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copiar el código fuente
COPY . .

# Comando para ejecutar la aplicación
CMD ["python", "App.py"]
