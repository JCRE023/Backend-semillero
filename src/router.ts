import { Router } from "express";
import { createAccount } from './config/handlers/index.js';

const router = Router();

//Routing:

router.post('/auth/register', createAccount);

export default router;  