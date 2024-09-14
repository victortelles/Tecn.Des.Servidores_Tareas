import { Request, Response } from "express";

class PeluchesController {
    getAll (req: Request, res: Response) {
        res.send('Peluche get all works');
    }
}

const peluchesController = new PeluchesController();
export default peluchesController;