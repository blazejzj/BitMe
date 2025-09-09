export {};
const { validationResult } = require("express-validator");
import db from "../db/index";
const bcrypt = require("bcryptjs");
const { validateProfileUpdate } = require("../validators/profileValidator");

exports.updateProfile = [
    validateProfileUpdate,
    async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
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

        // EMAIL
        if (req.body.email && req.body.email !== req.user.email) {
            const existing = await db.user.getUserByEmail(req.body.email);
            if (existing && existing.id !== userId) {
                return res.status(400).json({
                    msg: "An account with this email already exists.",
                });
            }
            await db.user.updateEmail(userId, req.body.email);
        }

        // USERNAME
        if (req.body.username && req.body.username !== req.user.username) {
            const existing = await db.user.getUserByUsername(req.body.username);
            if (existing && existing.id !== userId) {
                return res.status(400).json({
                    msg: "An account with this username already exists.",
                });
            }
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
    },
];
