export {};
import { Router } from "express";
const groupsRouter = Router();

// MIDDLEWARES
import { requireRegisteredUser } from "../middleware/guestMiddleware";
const { authenticateJWT } = require("../middleware/authMiddleware");

const groupsController = require("../controllers/groupsController");

groupsRouter.post("create");
