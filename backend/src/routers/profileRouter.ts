import { Router } from "express";
const profileRouter = Router();
const { authenticateJWT } = require("../middleware/authMiddleware");
const profileController = require("../controllers/profileController");

// TO MAKE THINGS EASY, WE DO NOT IMPLEMENT A FORGOT PASSWORD OPTION
// THIS WOULD REQUIRE MORE SECURITY MEASURES AND SHOULD BE DONE WITH EMAIL CONFIRMATION
// profileRouter.post("/forgot_password", profileController.forgotPassword);

// UPDATE PROFILE (email, username, displayName, password, photo)
profileRouter.post("/update", authenticateJWT, profileController.updateProfile);

module.exports = profileRouter;
