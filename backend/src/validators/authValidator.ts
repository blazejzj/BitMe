const { body } = require("express-validator");
const db = require("../db/index");

const emailAlreadyExistsMsg = "Email already in use";
const invalidEmail = "Invalid email adress";

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

    // body("password")
    // body("username")
    // body("displayName")
];
