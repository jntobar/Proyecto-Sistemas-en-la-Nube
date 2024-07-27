# frontend/Dockerfile
FROM node:14

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración y luego instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Comando para iniciar la aplicación
CMD ["npm", "start"]
