import { Router } from "express";
import upload from '../middlewares/upload';
import { HTTP_STATUS_CODES } from "../types/http-status-codes";


const router = Router();

//Subir un solo archivo
router.post('/upload', upload.single('docs') ,(req, res) => {
    //console.log('Archivo: ', req.file);
    if(req.file) {
        res.status(HTTP_STATUS_CODES.SUCCESS).send({
            filename: req.file.filename,
            size: req.file.size,
            path: req.file.path,
        });
    } else {
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('No se subio el archivo');
    }
});


// Subida de varios archivos PDF
router.post('/uploads', upload.array('docs', 5), (req, res) => {
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

export default upload;