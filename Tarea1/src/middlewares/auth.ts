import {Request, Response, NextFunction } from "express";
import { User } from "../types/user";

const secretKey = '12345';

declare namespace Express {
    export interface Request {
        user?: User
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    //const token = req.headers.authorization;
    const key = req.query.key;
    if (key === secretKey) {
        const user: User = {
            id: '1',
            name: 'John',
        }
        return next();
    }

    res.sendStatus(401);
}