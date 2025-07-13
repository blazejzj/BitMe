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

exports.login = async (req: any, res: any) => {
    // TODO
    // Validation of input fields has to be done

    const { email, password } = req.body;
    const user = await db.getUserByEmail(email);
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatch)
        return res.status(401).json({ message: "Wrong username or password." });

    const payload = {
        id: user.id,
        email: user.email,
        photoUrl: user.photoUrl,
        role: user.role,
        creationDate: user.creationDate,
        lastSeenAt: user.lastSeenAt,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        exp: "1h",
    });

    // set cookie with the token we generated here
    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // this aint good xd but for localhost ok
        maxAge: 3600000,
        sameSite: "strict",
    });

    res.status().json({
        message: "Login successfull",
    });
};

exports.logOut = (req: any, res: any) => {
    // when we log out we clear the cookie
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    });

    res.status(200).json({
        message: "Successfully logged out.",
    });
};
