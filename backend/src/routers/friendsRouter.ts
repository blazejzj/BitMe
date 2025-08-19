export {};
const { Router } = require("express");
const friendsRouter = Router();
const { authenticateJWT } = require("../middleware/authMiddleware");
const friendsController = require("../controllers/friendsController");

// BLOCK USERS
friendsRouter.post("/block/:id", authenticateJWT, friendsController.blockUser);
friendsRouter.post(
    "/unblock/:id",
    authenticateJWT,
    friendsController.unblockUser
);
friendsRouter.get(
    "/blocked_users",
    authenticateJWT,
    friendsController.getBlockedUsers
);

// FRIEND REQUESTS
friendsRouter.post(
    "/send_request/:id",
    authenticateJWT,
    friendsController.sendFriendRequest
);
friendsRouter.post(
    "/remove_request/:id",
    authenticateJWT,
    friendsController.removeFriendRequest
);
friendsRouter.post(
    "/accept_request/:id",
    authenticateJWT,
    friendsController.acceptFriendRequest
);
friendsRouter.post(
    "/reject_request/:id",
    authenticateJWT,
    friendsController.rejectFriendRequest
);
friendsRouter.get(
    "/incoming_requests",
    authenticateJWT,
    friendsController.getIncomingFriendRequests
);

// LIST OWN REQUESTS
friendsRouter.get(
    "/sent_requests",
    authenticateJWT,
    friendsController.getAllFriendRequests
);

// FRIENDS
friendsRouter.delete(
    "/remove_friend/:id",
    authenticateJWT,
    friendsController.removeFriend
);

friendsRouter.get("/friends", authenticateJWT, friendsController.getFriends);

module.exports = friendsRouter;
