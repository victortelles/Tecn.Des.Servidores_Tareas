import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";
import path from 'path';
import fs from 'fs';

// poner la carpeta documents en raiz
const rootDir = path.resolve(__dirname, '../../');
const documentsFolder = path.join(rootDir, 'documents');

//Crear carpeta si no existe
if (!fs.existsSync(documentsFolder)) {
    fs.mkdirSync(documentsFolder, { recursive: true });
}

//Subir archivo
const storage = diskStorage({
    destination: (req, file, cb) => {
        //Ruta  destino, para almacenar archivo
        cb(null, documentsFolder);
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        cb(null, `${timestamp}-${file.originalname}`);
        //cb(null, `${timestamp.toString()}.${(ext)}`);
    }
});

//Añadir filtro para validar que sea pdf
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const fileExt = path.extname(file.originalname).toLowerCase();
    const mimeType = file.mimetype;

    if (fileExt === '.pdf' && mimeType === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('solo se permiten archivos PDF'));
    }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024} }); //Limitar a 5 MB
export default upload;