# Dockerfile for backend
FROM python:3.9

WORKDIR /app

# Copia los archivos de requisitos y los instala
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copia el código fuente al contenedor
COPY . /app

# Configura las variables de entorno para Flask
ENV FLASK_APP=App.py
ENV FLASK_RUN_HOST=0.0.0.0

# Expone el puerto en el que Flask escuchará
EXPOSE 5000

# Comando para ejecutar Flask
CMD ["flask", "run"]
