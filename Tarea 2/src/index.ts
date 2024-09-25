import express from 'express';
//Importar libreria de MongoDB
import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

import routes from './routes';

const app = express();
const port  = process.env.PORT || 3000;

//Importar la contraseñas de MongoDB
const dbUrl = process.env.DB_URL;
//console.log('Mongo URL:', dbUrl);

app.use(routes);

//Conexion de MongoDB y arranque del servidor
connect(dbUrl as string).then( res => {
    console.log('Ya se conecto');
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
}).catch(err => {
    console.log('Error al conectar:', err);
});