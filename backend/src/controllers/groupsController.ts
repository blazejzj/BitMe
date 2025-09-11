import { Request, Response } from "express";
import db from "../db";

exports.createGroup = async (req: Request, res: Response) => {
    const user = req.user;

    const { groupName, groupPhoto } = req.body;

    if (!groupName)
        return res.status(400).json({ msg: "Group name is required" });

    const group = await db.groups.createNewGroup(
        groupName,
        groupPhoto,
        user!.id
    );
    return res.status(201).json({
        msg: "Successfully created a new group chat",
        group,
    });
};

exports.deleteGroup = async (req: Request, res: Response) => {
    const user = req.user;

    const { groupId } = req.params;
    if (!groupId) return res.status(400).json({ msg: "groupId is required" });

    const userOwnsGroup = await db.groups.userOwnsGroup(groupId, user!.id);
    if (!userOwnsGroup) {
        return res.status(403).json({ msg: "Forbidden" });
    }

    await db.groups.deleteGroup(groupId);

    return res.status(200).json({ msg: "Successfully deleted group" });
};

exports.getAllUserGroups = (req: Request, res: Response) => {
    const userId = req.user!.id;

    const groups = db.groups.getAllUsersGroups(userId);

    return res.json(200).json({
        msg: "Successfully fetched all user's groups.",
        groups,
    });
};
