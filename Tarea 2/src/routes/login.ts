import { Router } from 'express';
import loginController from '../controllers/loginController';

const router = Router();

router.get('',(req, res) => {
    res.send('Api login');
})

//Ruta login
router.post('/', loginController.login);

export default router;