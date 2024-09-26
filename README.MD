# Tarea 2: Autenticacion de usuarios
Esta tarea consiste en realizar el proceso de autenticación de un usuario.

# Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
Clona el repositorio de GitHub en tu maquina local o bien descargando el zip.
```bash
git clone https://github.com/victortelles/Tecn.Des.Servidores_Tareas.git
```
```bash
https://github.com/victortelles/Tecn.Des.Servidores_Tareas/archive/refs/heads/tarea2.zip
```

### 2. Cambiar a la rama tarea2
Después de clonar el repositorio, accede a la rama `tarea2`.

```bash
git checkout tarea2
```

### 3. Configurar variables de entorno
Crea un archivo `.env` o bien puedes usar el `.env template`, pero quitando el `template`. Despues en la raíz del proyecto con las siguientes variables:
```bash
DB_URL= <URL_CONEXION_MONGO>
JWT_SECRET = <TU_CLAVE_SECRETA>
```

### 4. Instalar dependencias
Entra al directorio del proyecto y Ejecuta el siguiente comando para instalar todas las dependencias del proyecto.

```bash
cd Tarea 2
```
```bash
npm install
```

### 5. Compilar el proyecto
```bash
npm run scripts
```

### 6. Ejecutar el proyecto en modo produccion
```bash
npm start
```

### 6. Ejecutar el proyecto en modo desarrollo
Para ejecutar la API en modo de desarrollo con reinicios automáticos, usa el siguiente comando:
```bash
npm run dev
```
Debera de estar corriendo en el puerto **3000**

### Endpoints disponibles
- Ruta: `GET /register`
- Ruta: `POST /register`
- Ruta: `GET /login`
- Ruta: `POST /login`

## Caso Pruebas
Las pruebas las recomiendo a hacer con la herramienta de **Postman**

### Register
- Ruta: `POST /register`
```bash
{
  "firstName": "Nombre",
  "lastName": "Apellido",
  "email": "correo@example.com",
  "password": "contraseña123"
}
```
Si todo salio correctamente, debio de salir un codigo 200 y un mensaje exitoso.
y dentro del mongoDB debera de almacenar el nuevo usuario.

### Login
- Ruta: `POST /login`
```bash
{
  "email": "correo@example.com",
  "password": "contraseña123"
}
```
Si todo salio correctamente, debio de salir un mensaje de exito y un token generado.