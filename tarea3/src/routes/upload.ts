import { Router } from "express";
import upload from '../middlewares/upload';

const router = Router();

router.post('/upload', upload.single('file') ,(req, res) => {
    console.log('Archivo: ', req.file);
    if(req.file) {
        res.send('Se subio el archivo');
    } else {
        res.status(400).send('No se subio el archivo');
    }
});


router.post('/uploads', upload.array('files'), (req, res) => {
    console.log('Archivo: ', req.files);
    if(req.files && req.files.length) {
        res.send('se subieron los archivos');
    } else {
        res.status(400).send('No se subieron los archivos ');
    }
});

export default upload;