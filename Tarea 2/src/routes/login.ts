import { Router } from 'express';
import loginController from '../controllers/loginController';

const router = Router();

//Ruta login
router.post('/', loginController.login);

export default router;