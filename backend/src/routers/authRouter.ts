const { Router } = require("express");
const authRouter = Router();
const {
    isNotLoggedIn,
    authenticateJWT,
} = require("../middleware/authMiddleware");

// authRouter.post("/register", isNotLoggedIn, authController.registerNewUser);

export default authRouter;
