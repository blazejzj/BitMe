import express from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// dotenv
dotenv.config();

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server running!");
});
