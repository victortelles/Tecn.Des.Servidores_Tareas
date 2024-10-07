import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";


//Subir archivo
const storage = diskStorage({
    destination: (req, file, cb) => {
        //Ruta  destino, para almacenar archivo
        cb(null, 'public/images/');
    },
    filename:  (req, file, cb) => {
        const ext = file.originalname.split('.').pop()?.toLocaleLowerCase();
        const timestamp = new Date().getTime();
        cb(null, `${timestamp.toString()}.${(ext)}`);
    }
});

//Añadir filtros
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback ) => {
    cb(null, true);
};

const upload = multer({ storage, fileFilter });
export default upload;