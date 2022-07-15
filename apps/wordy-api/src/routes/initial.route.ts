import { Router } from 'express';
import { initialController } from '../controllers/initial.controller';

const router = Router();

router.get('/', initialController);

export default router;
