export {};
import { Router } from "express";
const groupsRouter = Router();

// MIDDLEWARES
import { requireRegisteredUser } from "../middleware/guestMiddleware";
const { authenticateJWT } = require("../middleware/authMiddleware");

const groupsController = require("../controllers/groupsController");

// CREATE NEW GROUP
groupsRouter.post(
    "/create",
    authenticateJWT,
    requireRegisteredUser,
    groupsController.createGroup
);

// DELETE GROUP
groupsRouter.delete(
    "/delete/:id",
    authenticateJWT,
    requireRegisteredUser,
    groupsController.deleteGroup
);

module.exports = groupsRouter;
