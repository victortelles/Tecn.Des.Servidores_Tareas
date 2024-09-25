import {Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import { HTTP_STATUS_CODE } from '../types/http-status-codes';

class RegisterController {
    async register(req: Request, res: Response) {

        const { firstName, lastName, email, password, role } = req.body;

        try {
            //Validar si existe el usuario
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: 'El usuario ya existe'});
            }

            //Encriptar o hashear la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            //Crear nuevo usuario
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role,
                status: 'active'
            });

            //guardar al usuario
            await user.save();
            res.status(HTTP_STATUS_CODE.SUCCESS).json({ message: "Usuario registrado correctamente."});

        } catch (error) {
            console.error('Error durante la registro del usuario:', error);
            res.send(HTTP_STATUS_CODE.SERVER_ERROR).json({ message: 'Error al registrar '});

        }
    }
}

const registerController = new RegisterController();
export default registerController