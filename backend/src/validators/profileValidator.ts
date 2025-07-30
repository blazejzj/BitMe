export {};
const { body } = require("express-validator");
const { db } = require("../db/index");
import { Request } from "express";

// EMAIL UPDATE
const invalidEmailFormat = "Please enter a valid email adress.";

// PASSWORD UPDATE
const passwordLengthMsg = "New password has to be atleast 8 characters long.";
const passwordNoMatch = "Passwords do not match.";

// USERNAME UPDATE
const usernameLengthMsg = "Username must be between 4 and 16 characters long.";
const usernamePatternMsg =
    "Username can only contain letters, numbers, dots, underscores, and hyphens.";
const usernameAlreadyExistsMsg =
    "An account with this username already exists.";

// DISPLAYNAME UPDATE
const displayNamePatternMsg = "Display name contains invalid characters.";
const displayNameLengthMsg =
    "Display name must be between 1 and 50 characters.";

exports.validateProfileUpdate = [
    body("email").isEmail().withMessage(invalidEmailFormat).bail(),
    body("password").isLength({ min: 8 }).withMessage(passwordLengthMsg).bail(),
    body("confirmPassword").custom(
        (value: string, { req }: { req: Request }) => {
            if (value !== req.body.password) {
                return Promise.reject(passwordNoMatch);
            }
        }
    ),
    body("username")
        .isLength({ min: 4, max: 16 })
        .withMessage(usernameLengthMsg)
        .bail()
        .matches(/^[a-zA-Z0-9._-]+$/)
        .withMessage(usernamePatternMsg)
        .bail()
        .custom(async (username: string) => {
            const exists = await db.user.usernameExists(username);
            if (exists) {
                return Promise.reject(usernameAlreadyExistsMsg);
            }
        }),
    body("displayName")
        .isLength({ min: 1, max: 50 })
        .withMessage(displayNameLengthMsg)
        .bail()
        .matches(/^[a-zA-Z0-9 .,'\-]{1,50}$/)
        .withMessage(displayNamePatternMsg),
];
