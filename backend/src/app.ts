const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const passportConfig = require("./config/configurePassport");
const authRouter = require("./routers/authRouter");

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

// listen
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running!");
});
