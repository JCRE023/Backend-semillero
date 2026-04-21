import {Request ,Response} from 'express';
import { validationResult } from 'express-validator';
import slug from 'slug';
import User from '../models/User.js';
import { checkPassword, hashPassword } from '../utils/auth.js';

export const createAccount = async (req: Request, res: Response) => {
   
   // Gestion de errores de validacion:
   let errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        const error = new Error('El email ya esta en uso!...')
        return res.status(409).json({ error: error.message })
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });

    if (handleExists) {
        const error = new Error('El nombre de usuario no esta disponible!...')
        return res.status(409).json({ error: error.message })
    }

    console.log(req.body);

    // We can select between this two seentes for create and insert data: Only one sentence:
    // await User.create(req.body);

    // Or with two senteces:
    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();

    res.status(201).send('Registro creado correctamente!...');
}

export const login = async (req: Request, res: Response) => {
    // Management errros:
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if the user exists:
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error('El usuario no existe!...')
        return res.status(404).json({ error: error.message })
    }

    // Check if the password is correct:
    const isPasswordCorrect = await checkPassword(password, user.password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
        const error = new Error('El password es incorrecto!...')
        return res.status(401).json({ error: error.message })
    }

    res.json({ "msg": "Usuario existente!..." });
}