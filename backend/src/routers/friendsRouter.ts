import { requireRegisteredUser } from "../middleware/guestMiddleware";
export {};

const { Router } = require("express");
const friendsRouter = Router();
const { authenticateJWT } = require("../middleware/authMiddleware");
const friendsController = require("../controllers/friendsController");

// BLOCK USERS
friendsRouter.post(
    "/block/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.blockUser
);
friendsRouter.post(
    "/unblock/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.unblockUser
);
friendsRouter.get(
    "/blocked_users",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.getBlockedUsers
);

// FRIEND REQUESTS
friendsRouter.post(
    "/send_request/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.sendFriendRequest
);
friendsRouter.post(
    "/remove_request/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.removeFriendRequest
);
friendsRouter.post(
    "/accept_request/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.acceptFriendRequest
);
friendsRouter.post(
    "/reject_request/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.rejectFriendRequest
);
friendsRouter.get(
    "/incoming_requests",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.getIncomingFriendRequests
);

// LIST OWN REQUESTS
friendsRouter.get(
    "/sent_requests",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.getAllFriendRequests
);

// FRIENDS
friendsRouter.delete(
    "/remove_friend/:id",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.removeFriend
);

friendsRouter.get(
    "/friends",
    requireRegisteredUser,
    authenticateJWT,
    friendsController.getFriends
);

module.exports = friendsRouter;
