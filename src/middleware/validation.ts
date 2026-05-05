import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const handleInputErrors = (req : Request, res : Response, next : NextFunction) => {
    // Management errros:
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // I'm referring to the function that is used with next(). In this case,
    // the function is in the router.
    next();
}