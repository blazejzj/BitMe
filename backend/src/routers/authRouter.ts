export {};
const { Router } = require("express");
const authRouter = Router();
const {
    isNotLoggedIn,
    authenticateJWT,
} = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");

// register new user
authRouter.post("/register", isNotLoggedIn, authController.registerUser);

// log in (user)
authRouter.post("/login", isNotLoggedIn, authController.login);

// log in (guest mode)
authRouter.post("/login/guest", isNotLoggedIn, authController.loginGuest);

// logout (guest and user mode (when you're guest you can't relog))
authRouter.post("/logout", authenticateJWT, authController.logOut);

module.exports = authRouter;
