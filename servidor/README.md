# Proyecto React + Express con Axios

Este proyecto es una aplicación fullstack que consiste en un **backend** desarrollado con Express.js y un **frontend** desarrollado con React + Vite. El frontend consume una API REST del backend usando Axios para mostrar una lista de estudiantes.

---

## 📋 Tabla de Contenidos

- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
  - [1. Clonar el Repositorio](#1-clonar-el-repositorio)
  - [2. Instalar Dependencias del Backend](#2-instalar-dependencias-del-backend)
  - [3. Instalar Dependencias del Frontend](#3-instalar-dependencias-del-frontend)
- [Ejecución del Proyecto](#-ejecución-del-proyecto)
  - [Iniciar el Servidor Backend](#iniciar-el-servidor-backend)
  - [Iniciar el Frontend](#iniciar-el-frontend)
- [URLs del Proyecto](#-urls-del-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)

---

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js v5** - Framework web para Node.js
- **CORS** - Middleware para habilitar Cross-Origin Resource Sharing

### Frontend
- **React v19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite v7** - Herramienta de desarrollo rápida
- **Axios** - Cliente HTTP para realizar peticiones al backend

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** - [Descargar Git](https://git-scm.com/)

Para verificar que tienes Node.js y npm instalados, ejecuta:

```bash
node --version
npm --version
```

---

## 📥 Instalación

### 1. Clonar el Repositorio

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio del proyecto
cd inicio-con-react-y-axios/servidor
```

> **Nota:** Reemplaza `<URL_DEL_REPOSITORIO>` con la URL real de tu repositorio de GitHub/GitLab.

### 2. Instalar Dependencias del Backend

Desde el directorio `servidor`, ejecuta:

```bash
npm install
```

Esto instalará las siguientes dependencias:
- `express` - Framework del servidor
- `cors` - Middleware para CORS

### 3. Instalar Dependencias del Frontend

Navega al directorio `frontend` e instala las dependencias:

```bash
cd frontend
npm install
```

Esto instalará React, Vite, Axios y otras dependencias necesarias.

---

## ▶️ Ejecución del Proyecto

Para que la aplicación funcione correctamente, necesitas ejecutar **ambos servidores** (backend y frontend) simultáneamente en terminales separadas.

### Iniciar el Servidor Backend

Desde el directorio `servidor` (raíz del proyecto):

```bash
node server.js
```

Verás el mensaje: `Servidor Correcto......`

El servidor backend estará corriendo en: **http://localhost:3000**

### Iniciar el Frontend

Abre una **nueva terminal**, navega al directorio `frontend` y ejecuta:

```bash
cd frontend
npm run dev
```

Para acceder desde otros dispositivos en la misma red:

```bash
npm run dev -- --host
```

El servidor de desarrollo de Vite estará corriendo en: **http://localhost:5173**

---

## 🔗 URLs del Proyecto

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend (Local) | http://localhost:5173 | Interfaz de usuario React |
| Frontend (Red) | http://[TU_IP]:5173 | Acceso desde otros dispositivos |
| Backend API | http://localhost:3000 | Servidor Express |
| API - Lista de Cursos | http://localhost:3000/api/cursos/lista | Endpoint que retorna la lista de estudiantes |

### Probar la API directamente

Puedes probar el endpoint de la API abriendo en tu navegador:

```
http://localhost:3000/api/cursos/lista
```

Esto retornará un JSON con la lista de estudiantes.

---

## 📁 Estructura del Proyecto

```
servidor/
├── package.json          # Dependencias del backend
├── package-lock.json     # Lock file del backend
├── server.js             # Servidor Express (API)
├── README.md             # Este archivo
│
└── frontend/             # Aplicación React
    ├── package.json      # Dependencias del frontend
    ├── package-lock.json # Lock file del frontend
    ├── vite.config.js    # Configuración de Vite (incluye proxy)
    ├── index.html        # HTML principal
    ├── eslint.config.js  # Configuración de ESLint
    │
    ├── public/           # Archivos estáticos públicos
    │   └── vite.svg
    │
    └── src/              # Código fuente de React
        ├── main.jsx      # Punto de entrada de React
        ├── App.jsx       # Componente principal
        ├── App.css       # Estilos del componente App
        ├── index.css     # Estilos globales
        │
        └── assets/       # Assets (imágenes, etc.)
            └── react.svg
```

---

## 📡 API Endpoints

### GET /api/cursos/lista

Retorna la lista completa de estudiantes.

**URL:** `http://localhost:3000/api/cursos/lista`

**Método:** `GET`

**Respuesta exitosa:**

```json
[
  {
    "codigo": 1,
    "nombre": "Maicol",
    "apellido": "Rubio Pinedo",
    "edad": 17,
    "ciclo_Seccion": "II ´C´ "
  },
  {
    "codigo": 2,
    "nombre": "Isabella",
    "apellido": "Casallas Obeso",
    "edad": 18,
    "ciclo_Seccion": "II ´C´ "
  }
  // ... más registros
]
```

---

## 🛠️ Scripts Disponibles

### Backend (directorio `servidor`)

| Comando | Descripción |
|---------|-------------|
| `node server.js` | Inicia el servidor Express |

### Frontend (directorio `frontend`)

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run dev -- --host` | Inicia el servidor accesible en red |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Ejecuta el linter (ESLint) |

---

## 🔧 Configuración del Proxy

El frontend está configurado con un proxy en [`vite.config.js`](frontend/vite.config.js) que redirige las peticiones `/api/*` al backend:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
    },
  },
},
```

Esto permite que el frontend haga peticiones a `/api/cursos/lista` sin preocuparse por problemas de CORS durante el desarrollo.

---

## 📝 Notas Adicionales

- Asegúrate de que el puerto **3000** (backend) y **5173** (frontend) estén disponibles
- Si cambias el puerto del backend, actualiza también la configuración del proxy en `vite.config.js`
- El backend incluye middleware CORS por si necesitas hacer peticiones directamente sin el proxy

---

## 👥 Autores

- Desarrollado como proyecto de aprendizaje de React y Axios

---

## 📄 Licencia

Este proyecto está bajo la licencia ISC.