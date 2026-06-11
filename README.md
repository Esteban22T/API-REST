# API REST - Node.js + MongoDB Atlas

API REST construida con Node.js, Express y MongoDB Atlas que permite gestionar usuarios mediante operaciones CRUD.

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: npm install
3. Configurar el archivo .env basándose en .env.example
4. Ejecutar: npm start

## Endpoints

- POST /api/users - Crear usuario
- GET /api/users - Obtener todos los usuarios
- GET /api/users/:id - Obtener un usuario
- DELETE /api/users/:id - Eliminar usuario
- PUT /api/users/:id - Actualizar usuario