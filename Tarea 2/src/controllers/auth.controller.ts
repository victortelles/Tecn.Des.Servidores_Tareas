import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/token";
import { HTTP_STATUS_CODE } from "../types/http-status-codes";

class AuthController {
    async register (req: Request, res: Response) {
        const { firstName, lastName, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });
            if ( existingUser ) {
                return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({message: 'Este usuario ya existe' });
            }
            const hashedPassword = await hashPassword(password);
            const newUser = new User ({ firstName, lastName, email, password: hashPassword })
            await newUser.save();

            return res.status(HTTP_STATUS_CODE.CREATED).json({ message: 'Usuario registrado correctamente' });
        } catch (err) {
            return res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({ message: 'Error al registrar usuario'});
        }
    }

    //Funcion para el login del usuario

}

const authController = new AuthController();
//Exportacion
export default authController;