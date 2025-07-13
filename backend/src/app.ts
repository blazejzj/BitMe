const express = require("express");
const cors = require("cors");
const passport = require("passport");

require("dotenv").config();

// server
const app = express();

// passportjs
const passportConfig = require("./config/configurePassport");
passportConfig(passport);

// cors
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));
// use json requests
app.use(express.json());

// routers
// xx

// listen
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running!");
});
