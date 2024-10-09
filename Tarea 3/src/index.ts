import express from 'express';
import routes from './routes/index';
import path from 'path';

//JS, ruta raiz, para documents
const rootDir = path.resolve(__dirname, '../../');

const app = express();

app.use(express.json());

//Ruta relativa para la carpeta de documents en raiz del proyecto
app.use('/documents', express.static(path.join(rootDir, 'documents')));

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})