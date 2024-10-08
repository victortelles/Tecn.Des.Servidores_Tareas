import { Router } from "express";
import upload from '../middlewares/upload';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";

const router = Router();

// Subida de varios archivos PDF
router.post('/', upload.array('docs', 5), (req, res) => {
    if (req.files && req.files.length) {
        const files = (req.files as Express.Multer.File[]).map(file => ({
            filename: file.filename,
            size: file.size,
            path: file.path,
        }));
        res.status(HTTP_STATUS_CODES.SUCCESS).send({ files });
    } else {
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('No se subieron los archivos.');
    }
});
export default router;
