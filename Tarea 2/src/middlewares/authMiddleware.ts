import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HTTP_STATUS_CODE } from '../types/http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Obtener el token desde el header
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ message: 'Acceso denegado: Token no Obtenido' });
    }

    try {
        const secretKey = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, secretKey);       //Verifica el token con la clave secreta
        req.user = decoded;                                 //Almacena los datos del usuarios decodificados en el request
        next();
    } catch (error) {
        return res.status(HTTP_STATUS_CODE.FORBIDEN).json({ message: 'Token invalido '});
    }
};

export { authMiddleware };