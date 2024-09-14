import { Router } from "express";
import usersRoutes from './users';
import peluchesRoutes from './peluches';
const router = Router();

router.use('/users', usersRoutes);
router.use('/peluches', peluchesRoutes);

export default router;