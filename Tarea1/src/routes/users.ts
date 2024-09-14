import { Router } from "express"
import usersController, { UsersController } from "../controllers/user.controllers";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get('', authMiddleware ,usersController.getAll);

router.get('/2', usersController.findAll);

export default router;