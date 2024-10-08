import { Router } from "express";
import { HTTP_STATUS_CODES } from "../types/http-status-codes";
import path from 'path';

const router = Router();

router.get('/',(req, res) => {
    const { file } = req.query;

    if (!file) {
        return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: 'El parametro "file" es requerido ' });
    }

    const filePath = path.join(__dirname, '../../documents', file as string);


    res.sendFile(filePath, (error) => {
        if (error) {
            return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ message: 'El archivo no existe' })
        }
    });
});


export default router;