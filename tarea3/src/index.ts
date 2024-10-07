import express from 'express';
import routes from './routes/index';
import path from 'path';

const app = express();

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})