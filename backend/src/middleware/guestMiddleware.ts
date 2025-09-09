import { NextFunction } from "express";

// Middleware checking if user is a GUEST
// Which means they haven't created an account and have
// limited possibilities within the app
export const requireRegisteredUser = (
    req: any,
    res: any,
    next: NextFunction
) => {
    if (req.user.role === "GUEST") {
        return res.status(403).json({
            msg: "Guests are not allowed to perform this action.",
        });
    }
    next();
};
