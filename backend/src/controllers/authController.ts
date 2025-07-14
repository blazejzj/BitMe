import { randomUUID } from "crypto";

const db = require("../db/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator");

exports.registerUser = async (req: any, res: any) => {
    // TODO
    // validation of input fields

    const { email, password, username, displayName, photoUrl } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await db.user.registerUser(
        email,
        hashedPassword,
        username,
        displayName,
        photoUrl
    );

    const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName: user.displayName,
        photoUrl: user.photoUrl,
        role: user.role,
        creationDate: user.creationDate,
        lastSeenAt: user.lastSeenAt,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false,
        maxAge: 3600000,
    });

    res.status(200).json({ message: "Successfully registered and logged in." });
};

function randomGuestDisplayName() {
    return "Guest" + Math.floor(10000 + Math.random() * 90000);
}

exports.loginGuest = async (req: any, res: any) => {
    const payload = {
        email: randomUUID(),
        password: randomUUID(),
        username: randomUUID(),
        displayName: randomGuestDisplayName(),
        photoUrl: null,
        role: "GUEST",
        creationDate: Date.now(),
        lastSeenAt: Date.now(),
    };

    const hashedGuestPassword = await bcrypt.hash(payload.password, 10);
    await db.user.registerGuest(
        payload.email,
        hashedGuestPassword,
        payload.username,
        payload.displayName,
        payload.photoUrl,
        payload.role,
        payload.creationDate,
        payload.lastSeenAt
    );

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });

    // log guest in immediately
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false,
        maxAge: 3600000,
    });

    res.status(200).json({
        message: "Successfully logged in as guest.",
    });
};

exports.login = async (req: any, res: any) => {
    // TODO
    // Validation of input fields has to be done

    const { email, password } = req.body;
    const user = await db.user.getUserByEmail(email);
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatch)
        return res.status(401).json({ message: "Wrong username or password." });

    const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName: user.displayName,
        photoUrl: user.photoUrl,
        role: user.role,
        creationDate: user.creationDate,
        lastSeenAt: user.lastSeenAt,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    // set cookie with the token we generated here
    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // this aint good xd but for localhost ok
        maxAge: 3600000,
        sameSite: "strict",
    });

    res.status(200).json({
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
