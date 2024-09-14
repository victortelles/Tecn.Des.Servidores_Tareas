import { Request, Response } from "express";
//Importar lista de usuarios hardcordeados
import { users } from "../middlewares/auth";

export class UsersController {
    getAll(req: Request, res: Response){
        res.json({
            title: 'Lista de usuarios',
            users: users
        });
    }
    //otra funcion
    findAll(req: Request, res: Response) {
        res.send(['Otra ruta sin privilegios/permisos']);
    }
}

const usersController = new UsersController();
export default usersController;