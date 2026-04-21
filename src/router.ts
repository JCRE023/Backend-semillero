import { Router } from "express";
import { createAccount, login } from './handlers/index.js';
import { body } from 'express-validator';


const router = Router();

// Routing for authentication and register
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no debe estar vacio!...'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no debe estar vacio!...'),
    body('email')
        .isEmail()
        .withMessage('email no es valido!...'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('El password debe ser minimo de 8 caracterres!...'),
    createAccount
);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('email no es valido!...'),
    body('password')
        .notEmpty()
        .withMessage('El password no debe estar vacio!...'),
        login);

export default router;