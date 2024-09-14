import { Router } from "express";
import usersRoutes from './users';
const router = Router();

router.use('/usuarios', usersRoutes);

export default router;