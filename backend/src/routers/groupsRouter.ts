export {};
import { Router } from "express";
const groupsRouter = Router();

// MIDDLEWARES
import { requireRegisteredUser } from "../middleware/guestMiddleware";
const { authenticateJWT } = require("../middleware/authMiddleware");

const groupsController = require("../controllers/groupsController");

// GET ALL GROUPS USER IS A PART OF
groupsRouter.get(
    "/",
    authenticateJWT,
    requireRegisteredUser,
    groupsController.getAllUserGroups
);

// GET SPECIFIC GROUP USER IS PART OF
groupsRouter.get(
    "/:id",
    authenticateJWT,
    requireRegisteredUser,
    groupsController.getSpecificUserGroup
);

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
