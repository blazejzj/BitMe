const db = require("../db/index");

exports.blockUser = async (req: any, res: any) => {
    const user = req.body.user;
    const blockedUserId = req.params.id;

    const found = await db.userConnections.isBlocked(user.id, blockedUserId);

    if (found) return res.status(400).json({ msg: "User already blocked." });

    await db.userConnections.block(user.id, blockedUserId);
    return res.status(200).json({ msg: "User successfully blocked." });
};

exports.unblockUser = async (req: any, res: any) => {};

exports.sendFriendRequest = async (req: any, res: any) => {};

exports.removeFriendRequest = async (req: any, res: any) => {};

exports.acceptFriendRequest = async (req: any, res: any) => {};

exports.rejectFriendRequest = async (req: any, res: any) => {};
