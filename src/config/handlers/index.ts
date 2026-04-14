import { Request, Response } from 'express';
import User from "../../models/User.js";
import { hashPassword } from '../../utils/auth.js';

export const createAccount = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });

    if (userExists) {
        const error = new Error('El usuario ya esta registrado!...');
        return res.status(409).json({ error: error.message });
    }

    // res.send('Desde register, lo envia res.send!...');
    console.log('Desde register!...');
    console.log(req.body);

    // Podemos seleccionar entre estas dos sentencias para crear e insertar datos:
    // Opción 1: Una sola sentencia
    // await User.create(req.body);

    // Opción 2: Con dos sentencias
    const user = new User(req.body);
    user.password = await hashPassword(password);
    await user.save();

    res.status(201).send('Registro creado correctamente!...');
}
