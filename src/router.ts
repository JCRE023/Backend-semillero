import { Router } from "express";
import User from './models/User.js';

const router = Router();

//Routing:

router.post('/auth/register', async(req, res) => {
    res.send('Desde register, lo envia res.send!...');
    console.log('Desde register');
    console.log(req.body);

    await User.create(req.body);
    res.send('Registro creado con exito!');
})

export default router;  