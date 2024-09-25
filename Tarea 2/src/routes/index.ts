import { Router } from "express";
import register from './register';
import login from './login';

//Rutas
const router = Router();

//Ruta raiz
router.get('', (req, res) => {
    res.send('Hello World!');
})

//register
router.use('/register', register)

//login
router.use('/login', login)

export default router;