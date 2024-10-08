# Tarea 3: Autenticacion de usuarios
Crear endpoint para descargar o visualizar archivo

# Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
Clona el repositorio de GitHub en tu maquina local o bien descargando el zip.
```bash
git clone https://github.com/victortelles/Tecn.Des.Servidores_Tareas.git
```
```bash
https://github.com/victortelles/Tecn.Des.Servidores_Tareas/archive/refs/heads/tarea3.zip
```

### 2. Cambiar a la rama tarea3
Después de clonar el repositorio, accede a la rama `tarea3`.

```bash
git checkout tarea3
```

### 3. Instalar dependencias
Entra al directorio del proyecto y Ejecuta el siguiente comando para instalar todas las dependencias del proyecto.

```bash
cd Tarea3
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
- Ruta: `POST /register`

## Caso Pruebas
Las pruebas las recomiendo a hacer con la herramienta de **Postman**

### /uploads
- Ruta: `POST localhost:3000/uploads`
```bash
{

}
```

### /downloads
- Ruta: `GET localhost:3000/downloads`
```bash
{

}
```

Si todo salio correctamente, debio de salir un codigo 200 y un mensaje exitoso.

## Enlaces
1. [Tarea 1 Middleware de Validacion de Rol](https://github.com/victortelles/Tecn.Des.Servidores_Tareas/tree/tarea1)
2. [Tarea 2 Autenticacion de usuario](https://github.com/victortelles/Tecn.Des.Servidores_Tareas/tree/tarea2)
3. [Tarea 3 endpoint para descargar o visualizar archivo](https://github.com/victortelles/Tecn.Des.Servidores_Tareas/tree/tarea3)