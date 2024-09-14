import { Router } from "express"
import usersController, { UsersController } from "../controllers/user.controllers";
import { authMiddleware, authMiddlewareRoles } from "../middlewares/auth";

const router = Router();

//GET /Usuarios
router.get('', authMiddleware, authMiddlewareRoles(['admin', 'gerente']), usersController.getAll);
//GET /Usuarios/2
router.get('/2', usersController.findAll);

export default router;