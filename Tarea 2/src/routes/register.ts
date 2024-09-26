import { Router } from 'express';
import registerController from '../controllers/registerController';

const router = Router();

router.get('',(req, res) => {
    res.send('Api register');
})

//Register
router.post('/', registerController.register);

export default router