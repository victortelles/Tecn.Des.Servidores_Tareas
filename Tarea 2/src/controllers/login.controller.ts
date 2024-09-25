import { Request, Response } from "express";
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HTTP_STATUS_CODE } from "../types/http-status-codes";

//Clase login
class LoginController {
    async login (req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            //Validacion si el usuario existe
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ message: 'Usuario no encontrado' });
            }

            //Validacion del rol si esta bloqueado o eliminado
            if (user.status !== 'active') {
                return res.status(HTTP_STATUS_CODE.FORBIDEN).json({ message: 'Usuario bloqueado o Usuario eliminado'});
            }

            //Comparacion de contraseñas
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ message: 'Contraseña invalida'});
            }

            //Generacion de JWT Token
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );
            res.status(HTTP_STATUS_CODE.SUCCESS).json({ token })
        } catch (error) {
            console.error(' Surgio un error durante el login' ,error);
            res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({ message: 'Surgio un error durante el login '});
        }
    }
}

const loginController = new LoginController();
export default loginController;