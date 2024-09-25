import { Router } from 'express';
import usersController from '../controllers/users.controller';

//Rutas
const router = Router();

//Rutas usuarios (/users)
router.get('', usersController.getAll);

// exportar las rutas de usuarios
export default router;