export {};
import prisma from "./prisma";

async function createNewGroup(
    groupName: string,
    groupPhoto: string | undefined,
    createdById: string
) {
    return prisma.groupChat.create({
        data: {
            groupName,
            createdById,
            ...(groupPhoto ? { groupPhoto } : {}),
        },
    });
}

async function deleteGroup(groupId: string) {
    return prisma.groupChat.delete({
        where: {
            id: groupId,
        },
    });
}

async function userOwnsGroup(groupId: string, userId: string) {
    const exists = await prisma.groupChat.findFirst({
        where: { id: groupId, createdById: userId },
    });

    return !!exists;
}

export default {
    createNewGroup,
    deleteGroup,
    userOwnsGroup,
};
