export {};
import prisma from "./prisma";

async function createNewGroup(
    groupName: string,
    groupPhoto: string,
    createdById: string
) {
    return prisma.groupChat.create({
        data: { groupName, groupPhoto, createdById },
    });
}

export default {
    createNewGroup,
};
