export {};
const { body } = require("express-validator");
const db = require("../db/index");

// EMAIL REGISTRATION
const emailAlreadyExistsMsg = "An account with this email already exists.";
const invalidEmailRegister = "Please enter a valid email address.";

// PASSWORD REGISTRATION
const passwordLengthMsg = "Your password must be at least 8 characters long.";

// USERNAME REGISTRATION
const usernameLengthMsg = "Username must be between 4 and 16 characters long.";
const usernamePatternMsg =
    "Username can only contain letters, numbers, dots, underscores, and hyphens.";
const usernameAlreadyExistsMsg =
    "An account with this username already exists.";

// DISPLAYNAME REGISTRATION
const displayNamePatternMsg = "Display name contains invalid characters.";
const displayNameLengthMsg =
    "Display name must be between 1 and 50 characters.";

// EMAIL/PASSWORD LOGIN
const invalidLoginCredentials =
    "Incorrect email or password. Please try again.";

// Validate fields (email, password, username, displayName)
// We purposefully don't validate photoUrl, maybe later
// becaues its goign to be done via multer
exports.validateUserRegister = [
    body("email")
        .isEmail()
        .withMessage(invalidEmailRegister)
        .bail()
        .custom(async (email: string) => {
            const exists = await db.user.emailExists(email);
            if (exists) {
                return Promise.reject(emailAlreadyExistsMsg);
            }
        }),
    body("password").isLength({ min: 8 }).withMessage(passwordLengthMsg).bail(),
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

exports.validateUserLogin = [
    body("email").isEmail().withMessage(invalidLoginCredentials).bail(),
];
