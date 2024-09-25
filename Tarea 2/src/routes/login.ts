import { Router } from 'express';
import loginController from '../controllers/login.controller';

const router = Router();

//Ruta login
router.post('/', loginController.login);

export default router;