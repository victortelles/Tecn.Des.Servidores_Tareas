import { Router } from "express";
import register from './register';

//Rutas
const router = Router();

//Ruta raiz
router.get('', (req, res) => {
    res.send('Hello World!');
})

router.use('/register', register)

export default router;