import { Request, Response, NextFunction } from "express";
import passport from "passport";

interface AuthenticateRequest extends Request {
    token: string;
    [key: string]: any;
}

const authenticateJWT = passport.authenticate("jwt", { session: false });

function isLoggedIn(
    req: AuthenticateRequest,
    res: Response,
    next: NextFunction
) {
    const token = req.cookies?.token;

    if (token) {
        return res.status(400).json({ message: "User already authenticated." });
    }

    next();
}

module.exports = { authenticateJWT, isLoggedIn };
