import { Router } from "express";
import registerRoutes from './register';
import loginRoutes from './login';

//Rutas
const router = Router();

//Ruta raiz
router.get('', (req, res) => {
    res.send('Hello World!');
})

//register
router.use('/register', registerRoutes)

//login
router.use('/login', loginRoutes)

export default router;