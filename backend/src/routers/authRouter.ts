export {};
const { Router } = require("express");
const authRouter = Router();
const {
    isNotLoggedIn,
    authenticateJWT,
} = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");

authRouter.post("/register", isNotLoggedIn, authController.registerUser);

module.exports = authRouter;
