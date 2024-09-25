import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'secret'

//Funcion para generar el JWT
export const generateToken = (userId: string)=> {
    return jwt.sign({ userId }, secretKey, { expiresIn: '2h' });
};

//validar o verificar el JWT
export const verifyToken = (token: string) => {
    return jwt.verify(token, secretKey);
};