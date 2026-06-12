# API REST POS - Node.js + MongoDB Atlas

API REST para un sistema POS que gestiona proveedores, clientes, productos/servicios, compras y ventas.

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: npm install
3. Configurar el archivo .env con `MONGODB_URI`
4. Ejecutar: npm start

## Endpoints

### Proveedores
- POST /api/providers - Crear proveedor
- GET /api/providers - Obtener todos los proveedores
- GET /api/providers/:id - Obtener proveedor por id
- PUT /api/providers/:id - Actualizar proveedor
- DELETE /api/providers/:id - Eliminar proveedor

### Clientes
- POST /api/clients - Crear cliente
- GET /api/clients - Obtener todos los clientes
- GET /api/clients/:id - Obtener cliente por id
- PUT /api/clients/:id - Actualizar cliente
- DELETE /api/clients/:id - Eliminar cliente

### Productos y Servicios
- POST /api/products - Crear producto/servicio
- GET /api/products - Obtener todos los productos/servicios
- GET /api/products/:id - Obtener producto/servicio por id
- PUT /api/products/:id - Actualizar producto/servicio
- DELETE /api/products/:id - Eliminar producto/servicio

### Compras
- POST /api/purchases - Crear compra
- GET /api/purchases - Obtener todas las compras
- GET /api/purchases/:id - Obtener compra por id
- PUT /api/purchases/:id - Actualizar compra
- DELETE /api/purchases/:id - Eliminar compra

### Ventas
- POST /api/sales - Crear venta
- GET /api/sales - Obtener todas las ventas
- GET /api/sales/:id - Obtener venta por id
- PUT /api/sales/:id - Actualizar venta
- DELETE /api/sales/:id - Eliminar venta


### Proveedores
- POST /api/providers - Crear proveedor
- GET /api/providers - Obtener todos los proveedores
- GET /api/providers/:id - Obtener proveedor por id
- PUT /api/providers/:id - Actualizar proveedor
- DELETE /api/providers/:id - Eliminar proveedor

### Clientes
- POST /api/clients - Crear cliente
- GET /api/clients - Obtener todos los clientes
- GET /api/clients/:id - Obtener cliente por id
- PUT /api/clients/:id - Actualizar cliente
- DELETE /api/clients/:id - Eliminar cliente

### Productos y Servicios
- POST /api/products - Crear producto/servicio
- GET /api/products - Obtener todos los productos/servicios
- GET /api/products/:id - Obtener producto/servicio por id
- PUT /api/products/:id - Actualizar producto/servicio
- DELETE /api/products/:id - Eliminar producto/servicio

### Compras
- POST /api/purchases - Crear compra
- GET /api/purchases - Obtener todas las compras
- GET /api/purchases/:id - Obtener compra por id
- PUT /api/purchases/:id - Actualizar compra
- DELETE /api/purchases/:id - Eliminar compra

### Ventas
- POST /api/sales - Crear venta
- GET /api/sales - Obtener todas las ventas
- GET /api/sales/:id - Obtener venta por id
- PUT /api/sales/:id - Actualizar venta
- DELETE /api/sales/:id - Eliminar venta