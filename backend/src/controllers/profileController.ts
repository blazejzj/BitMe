export {};
const { validationResult } = require("express-validator");
const db = require("../db/index");
const bcrypt = require("bcryptjs");

exports.updateProfile = async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors) {
        const err = errors.array({ onlyFirstError: true });
        return res.status(400).json({ msg: err[0].msg });
    }

    const userId = req.user.id;
    const authPassword = req.body.authPassword;
    const match = await bcrypt.compare(authPassword, req.user.password);
    if (!match) {
        return res.status(401).json({
            msg: "Incorrect password. Please try again.",
        });
    }

    if (req.body.email) {
        await db.user.updateEmail(userId, req.body.email);
    }

    if (req.body.username) {
        await db.user.updateUsername(userId, req.body.username);
    }

    if (req.body.password) {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        await db.user.updatePassword(userId, newPassword);
    }

    if (req.body.displayName) {
        await db.user.updateDisplayName(userId, req.body.displayName);
    }

    // if (req.body.photoUrl) {
    //     // TO DO
    // }

    return res.status(200).json({
        msg: "Profile has been updated.",
    });
};
