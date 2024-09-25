import { Router } from 'express';
import registerController from '../controllers/register.controller';

const router = Router();

//Register
router.post('/', registerController.register);

export default router