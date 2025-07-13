const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running!");
});
