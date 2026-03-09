# Leon Ambulante

Proyecto de plataforma para gestionar venta ambulante desarrollado como proyecto de graduación para UDG.

---

# Descripción

Esta aplicación tiene el objetivo de permitir la compra-venta de artículos variados dentro del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) entre estudiantes. Posee funcionalidades específicas para el comercio ambulante, tales como ver un mapa con vendedores cercanos, publicar productos fácilmente, coordinar entregas dentro del campus y proveer un chat para facilitar la comunicación.

---

## Arquitectura

La aplicación está compuesta por:

* Aplicación móvil desarrollada con React Native y Expo
* API REST desarrollada con Spring Boot
* Base de datos PostgreSQL
* Infraestructura basada en Docker

---

# Características principales

* Registro y autenticación con correo institucional
* Publicación de productos
* Visualización y filtrado de vendedores en el mapa
* Chat comprador-vendedor
* Sistema de historial de compras y ventas
* Perfil de vendedor con horarios y zonas del campus
* Búsqueda de productos y usuarios
* Recomendación personalizada de productos
* Selección de distintos métodos de entrega de productos
* Sistema de calificaciones a vendedores

---

# Tecnologías utilizadas

## Frontend

* React Native
* Expo
* React Native Paper
* Expo Router

## Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Security
* Flyway
* Maven

## Base de datos

* PostgreSQL

## Servicios externos

* Firebase

## Infraestructura

* Docker

## Herramientas

* Git
* Jira

---

## Estructura del proyecto

```
.
├── backend
│   ├── src
│   ├── pom.xml
│   └── Dockerfile
├── frontend
├── docker-compose.yml
└── .env
```

---

# Requisitos

Antes de ejecutar el proyecto debes tener instalado:

* Docker
* Docker Compose
* Git

---

# Configuración

El proyecto utiliza variables de entorno para configurar la base de datos.

Archivo `.env` en la raíz del proyecto:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
POSTGRES_DB=ambulante
```

---

# Ejecutar el backend

Desde la raíz del proyecto ejecutar:

```
docker compose up --build
```

Esto iniciará:

* Base de datos PostgreSQL
* Backend de la aplicación

---

# Servicios disponibles

## Backend API

```
http://localhost:8080
```

## Base de datos

```
host: localhost
port: 5433
user: postgres
password: 123456
database: ambulante
```

---

# Base de datos y migraciones

El proyecto utiliza Flyway para gestionar migraciones de base de datos.

Las migraciones se encuentran en:

```
backend/src/main/resources/db/migration
```

Las migraciones se ejecutan automáticamente al iniciar el backend.

---

# Arquitectura del backend

```
backend/src/main/java/com/udg/ambulantes/backend
```

Carpetas principales:

* config → configuración de la aplicación
* controller → endpoints REST
* dto → objetos de transferencia de datos
* exception → manejo global de errores
* model → entidades de base de datos
* repository → acceso a datos
* security → autenticación y autorización
* service → lógica de negocio

---

# Detener el proyecto

Para detener los contenedores:

```
docker compose down
```

---

# Frontend

El frontend es una aplicación móvil desarrollada con React Native utilizando Expo.

---

## Requisitos

Antes de ejecutar el frontend debes tener instalado:

* Node.js
* npm o npx
* La aplicación **Expo Go** en tu teléfono

---

## Ejecutar la aplicación

### 1. Iniciar los servicios del backend

Desde la raíz del proyecto iniciar los contenedores Docker:

```
docker compose up --build
```

Esto iniciará:

* PostgreSQL
* Backend de Spring Boot

---

### 2. Iniciar el frontend

Entrar a la carpeta del frontend:

```
cd frontend
```

Instalar dependencias:

```
npm install
```

Iniciar Expo:

```
npx expo start
```

---

### 3. Ejecutar la app en el celular

1. Instalar **Expo Go** en tu teléfono
2. Asegurarte de que tu computadora y tu teléfono estén conectados a la **misma red WiFi**
3. Escanear el código **QR** que aparece en la terminal o en el navegador
4. La aplicación se abrirá automáticamente en el teléfono mediante Expo Go

---

# Notas para desarrolladores

* El backend corre en el puerto **8080**
* PostgreSQL corre en el puerto **5433**
* Las migraciones de base de datos se ejecutan automáticamente mediante Flyway

---

# Autores

* Jose Roberto Escobedo Quezada
* Jose Daniel
* Alejandro
