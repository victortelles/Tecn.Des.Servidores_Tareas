import { Router } from "express";
import upload from '../middlewares/upload';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";


const router = Router();

router.post('/', (req, res) => {
    //validacion si son varios archivos
    const isMultiple = Array.isArray(req.body.docs);
    const uploadHandler = isMultiple
        ? upload.array('docs', 5)   //Varios archivos (limite de 5)
        : upload.single('docs');    //1 solo archivo pdf

    uploadHandler(req, res, (err) => {
        if (err) {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send(err.message);
        }

        if (isMultiple && req.files) {
            const files = (req.files as Express.Multer.File[]).map(file => ({
                filename: file.filename,
                size: file.size,
                path: file.path
            }));
            return res.status(HTTP_STATUS_CODES.SUCCESS).send({ files });
        }

        if (!isMultiple && req.file) {
            return res.status(HTTP_STATUS_CODES.SUCCESS).send({
                filename: req.file.filename,
                size: req.file.size,
                path: req.file.path,
            });
        }

        res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('No se subieron los archivos.');
    });
});

export default upload;