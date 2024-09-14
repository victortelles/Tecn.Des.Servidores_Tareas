# Tarea 1 - Middleware de Validacion de Rol

### Descripcion:
Este proyecto/tarea donde el Objetivo es: Desarrollar un middleware para restringir el acceso a un endpoint con base en el rol del usuario
Hecho con Express con TypeScript.

## Pasos para Ejecutar el Proyecto

1. **Clonar el Repositorio**
Clona el repositorio a tu máquina local usando el siguiente comando:
```bash
https://github.com/victortelles/Tecn.Des.Servidores_Tareas.git
```

2. **Instala dependencias**
Abre la consola de tu computadora y navega al directorio del proyecto e instala las dependencias
```bash
cd Tarea1
```
```bash
npm install
```

3. **Ejecuta los scripts**
Utiliza el siguiente comando para compilar el codigo de ts a js.
```bash
npm run scripts
```
Esto generara una carpeta */dist* donde contendra el index.js, para ejecutar el servidor.

4. **Inicia el Servidor local**
Utiliza el siguiente comando para iniciar el proyecto
```bash
npm start
```
Debe de aparecer un mensaje que esta corriendo en *'Server is running on port 3000'*

5. **(opcional) Inicia el Servidor en modo desarrollador**
Utiliza el siguiente comando para iniciar el proyecto en modo desarrollador
```bash
npm run dev
```
Debe de aparecer un mensaje que esta corriendo en *'Server is running on port 3000'*

# Ruta de prueba
Requiere una autenticación con una clave secreta (`key`) en la query string. 
Los usuarios se autentican en base a la clave proporcionada.
La respuesta JSON incluye un título y la lista de usuarios.

- **Ejemplo de Solicitud:**
1. Ruta raiz
```bash
http://localhost:3000/
```

2. Ruta usuarios sin permiso
```bash
http://localhost:3000/usuarios
```

3. Ruta de usuarios con permisos admin o gerente
```bash
http://localhost:3000/usuarios?key=12345
```
```bash
http://localhost:3000/usuarios?key=67890
```
De lo contrario si no existe la key, regresa un error 403



