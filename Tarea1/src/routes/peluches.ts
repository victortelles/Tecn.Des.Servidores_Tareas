import { Router } from "express";
import peluchesController from "../controllers/peluches.controller";

const router = Router();
router.get('/', peluchesController.getAll);

export default router;