import { Router } from 'express';
import { login, signup, logout } from '../controllers/authentication';

const router = Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/logout', logout);

export default router;
