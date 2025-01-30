import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Sign up route
router.post('/sign-up', registerUser);

// Sign in route
router.post('/sign-in', loginUser);

export default router;
