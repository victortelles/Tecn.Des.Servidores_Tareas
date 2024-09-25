import { Router } from "express";
import userRoutes from './users';

//Rutas
const router = Router();

//Ruta raiz
router.get('', (req, res) => {
    res.send('Hello World!');
})

export default router;