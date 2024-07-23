# Etapa 1: Construcción
FROM node:18 AS build

WORKDIR /app

# Copia los archivos de configuración de npm y instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación construida
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto en el que Nginx escuchará
EXPOSE 80

# Comando para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
