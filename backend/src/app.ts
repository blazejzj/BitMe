export {};
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const passportConfig = require("./config/configurePassport");
const authRouter = require("./routers/authRouter");
const profileRouter = require("./routers/profileRouter");
const friendsRouter = require("./routers/friendsRouter");
const groupsRouter = require("./routers/groupsRouter");

require("dotenv").config();

// server
const app = express();

// use json requests
app.use(express.json());

// cookies
app.use(cookieParser());

// passportjs
passportConfig(passport);

// cors
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

// routers
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/connections", friendsRouter);
app.use("/api/groups", groupsRouter);

// listen
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server is running!");
});
