import { Router } from 'express';
import registerController from '../controllers/registerController';

const router = Router();

//Register
router.post('/', registerController.register);

export default router