import { Router } from "express";
import download from '../middlewares/upload';

const router = Router();

router.get('',(req, res) => {
    res.send('Hello World!');
})


export default download;