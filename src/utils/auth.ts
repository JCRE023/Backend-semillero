import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const checkPassword = async (enteredPassword: string, hashedPassword: string) => {
    return await bcrypt.compare(enteredPassword, hashedPassword);
}

export const generateJWT = (id: string): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET no está definida en las variables de entorno');
    return jwt.sign({ id }, secret, { expiresIn: '7d' });
}
