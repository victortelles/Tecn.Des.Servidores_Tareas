import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";
import { HTTP_STATUS_CODES } from "../types/http-status-codes";


//Subir archivo
const storage = diskStorage({
    destination: (req, file, cb) => {
        //Ruta  destino, para almacenar archivo
        cb(null, 'documents/');
    },
    filename:  (req, file, cb) => {
        const ext = file.originalname.split('.').pop()?.toLowerCase();
        const timestamp = new Date().getTime();
        cb(null, `${timestamp.toString()}.${(ext)}`);
    }
});

//Añadir filtro para validar que sea pdf
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback ) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Solo se permite archivos PDF'), false);
    }
};

const upload = multer({ storage, fileFilter, limits: {fileSize: 5 * 1024 }}); //Limitar a 5 MB
export default upload;