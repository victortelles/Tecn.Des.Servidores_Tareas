import {Request, Response, NextFunction } from "express";
import { User } from "../types/user";

//llaves
const secretKeyAdmin = '12345';
const secretKeyGerente = '67890';

//Usuarios Hardcodeados
export const users: User[] = [
    {
        id: '1',
        name: 'Pedro',
        role: 'admin'
    },
    {
        id: '2',
        name: 'Juan',
        role: 'gerente'
    },
    {
        id: '3',
        name: 'Maria',
        role: 'cliente'
    },
]

declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

//Validar clave
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    //const token = req.headers.authorization;
    const key = req.query.key;

    //asignacion de rol por el usuario
    const user = users.find(u => {
        return (key === secretKeyAdmin && u.role === 'admin') ||
                (key === secretKeyGerente && u.role === 'gerente') ||
                (key !== secretKeyAdmin && key !== secretKeyGerente && u.role === 'cliente');
    });

    if(user) {
        req.user = user;
        return next();
    }
    res.sendStatus(401);
}

//Validacion de roles
export function authMiddlewareRoles(roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user && roles.includes(req.user.role)) {
            return next()
        }
        res.sendStatus(403);
    };
}