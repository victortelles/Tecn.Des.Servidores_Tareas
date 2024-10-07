import { Router} from 'express';
import upload from '../routes/upload'
import download from '../routes/download'

const router = Router();

router.use('/upload' ,upload)

router.use('/download', download)

router.get('',(req, res) => {
    res.render('Api raiz');
});

export default router;
