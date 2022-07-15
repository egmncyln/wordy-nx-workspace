import { Router } from 'express';
import {
  loginController,
  signupController,
  logoutController,
} from '../controllers/auth.controller';

const router = Router();

router.post('/login', loginController);

router.post('/signup', signupController);

router.get('/logout', logoutController);

export default router;
