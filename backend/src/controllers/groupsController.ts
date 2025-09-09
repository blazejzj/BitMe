import { Request, Response } from "express";
import db from "../db";

exports.createGroup = async (req: Request, res: Response) => {
    const user = req.user;
    const { groupName, groupPhoto } = req.body;

    if (!groupName) {
        return res.status(400).json({ msg: "Group name is required" });
    }

    // create group
    const group = await db.groups.createNewGroup(
        groupName,
        groupPhoto,
        user!.id
    );

    return res.json({
        msg: "Successfully created a new group chat",
        group,
    });
};
