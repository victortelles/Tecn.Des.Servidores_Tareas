import { Router } from 'express';
import uploadRoutes from '../routes/upload';
import downloadRoutes from '../routes/download';

const router = Router();

router.use('/uploads ', uploadRoutes);

router.use('/download', downloadRoutes);

router.get('', (req, res) => {
    res.render('Api raiz');
});

export default router;
