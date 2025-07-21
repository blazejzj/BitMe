const { body } = require("express-validator");
const db = require("../db/index");

// EMAIL REGISTRATION
const emailAlreadyExistsMsg = "An account with this email already exists.";
const invalidEmail = "Please enter a valid email address.";

// PASSWORD REGISTRATION
const passwordLengthMsg = "Your password must be at least 8 characters long.";

// USERNAME REGISTRATION
const usernameLengthMsg = "Username must be between 4 and 16 characters long.";
const usernamePatternMsg =
    "Username can only contain letters, numbers, dots, underscores, and hyphens.";

// Validate fields (email, password, username, displayName)
// We purposefully don't validate photoUrl, maybe later
// becaues its goign to be done via multer
exports.validateUserRegister = [
    body("email")
        .isEmail()
        .withMessage(invalidEmail)
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
        .withMessage(usernamePatternMsg),
    // body("displayName")
];
