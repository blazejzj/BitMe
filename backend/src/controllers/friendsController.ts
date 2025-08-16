const db = require("../db/index");

exports.blockUser = async (req: any, res: any) => {
    const user = req.user;
    const blockedUserId = req.params.id;

    const found = await db.userConnections.isBlocked(user.id, blockedUserId);
    const blockedUserExists = await db.user.userIdExists(blockedUserId);

    if (found) return res.status(400).json({ msg: "User already blocked." });
    if (!blockedUserExists)
        return res
            .status(400)
            .json({ msg: "User with given id doesn't exist." });

    await db.userConnections.block(user.id, blockedUserId);
    return res.status(200).json({ msg: "User successfully blocked." });
};

exports.unblockUser = async (req: any, res: any) => {
    const user = req.user;
    const blockedUserId = req.params.id;

    const found = await db.userConnections.isBlocked(user.id, blockedUserId);
    const blockedUserExists = await db.user.userIdExists(blockedUserId);

    if (!found)
        return res
            .status(400)
            .json({ msg: "User has not previously been blocked." });

    if (!blockedUserExists)
        return res
            .status(400)
            .json({ msg: "User with given id doesn't exist." });

    await db.userConnections.unblock(user.id, blockedUserId);
    return res.status(200).json({ msg: "User successfully unblocked." });
};

exports.getBlockedUsers = async (req: any, res: any) => {
    const user = req.user;

    const blockedUsers = db.userConnections.getBlockedUsers(user.id);
    return res.status(200).json({
        blockedUsers,
    });
};

exports.sendFriendRequest = async (req: any, res: any) => {
    const user = req.user;
    const friendUserId = req.params.id;

    if (user.id === friendUserId) {
        return res.status(400).json({ msg: "You can't add yourself." });
    }

    const friendAlready = await db.userConnections.isFriend(
        user.id,
        friendUserId
    );
    if (friendAlready) {
        return res
            .status(400)
            .json({ msg: "User is already on your friendslist." });
    }

    const friendRequestActive = await db.userConnections.isRequestActive(
        user.id,
        friendUserId
    );
    if (friendRequestActive) {
        return res
            .status(400)
            .json({ msg: "Friend request has already been sent." });
    }

    const friendUserExists = await db.user.userIdExists(friendUserId);
    if (!friendUserExists) {
        return res
            .status(400)
            .json({ msg: "Person you are trying to add does not exist." });
    }

    await db.sendFriendRequest(user.id, friendUserId);
};

exports.getAllFriendRequests = async (req: any, res: any) => {
    const userId = req.user.id;
    const requests = db.userConnections.getAllActiveFriendRequests(userId);
    res.status(200).json({
        msg: "Successfully fetched all friends requests.",
        requests: requests,
    });
};

exports.removeFriendRequest = async (req: any, res: any) => {
    const user = req.user;
    const friendUserId = req.params.id;

    const removed = await db.userConnections.removeFriendRequest(
        user.id,
        friendUserId
    );
    if (removed === 0) {
        return res
            .status(404)
            .json({ msg: "No outgoing friend request to remove." });
    }
    return res.status(200).json({ msg: "Friend request removed." });
};

exports.acceptFriendRequest = async (req: any, res: any) => {
    const user = req.user;
    const friendUserId = req.params.id;

    const exists = await db.userConnections.isRequestActive(
        friendUserId,
        user.id
    );
    if (!exists) {
        return res
            .status(404)
            .json({ msg: "No incoming friend request from this user." });
    }

    // add friendship (both directions) and clear any pending requests between
    await db.userConnections.acceptFriendRequest(friendUserId, user.id);

    return res.status(200).json({ msg: "Friend request accepted." });
};

exports.rejectFriendRequest = async (req: any, res: any) => {
    const user = req.user;
    const friendUserId = req.params.id;

    const removed = await db.userConnections.rejectFriendRequest(
        friendUserId,
        user.id
    );
    if (removed === 0) {
        return res
            .status(404)
            .json({ msg: "No incoming friend request from this user." });
    }
    return res.status(200).json({ msg: "Friend request rejected." });
};
