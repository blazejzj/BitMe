const db = require("../db/queries");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator");

exports.registerUser = async (req: any, res: any) => {
    // TODO
    // validation of input fields

    const { email, password, displayName, photoUrl } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user
    await db.registerUser(email, hashedPassword, displayName, photoUrl);

    res.status(200).json({ message: "Successfully registered." });
};
