import prisma from "./prisma";

async function isBlocked(userId: string, blockedUserId: string) {
    const foundEntry = await prisma.blockList.findUnique({
        where: { userId_blockedUserId: { userId, blockedUserId } },
    });

    return !!foundEntry;
}

async function block(userId: string, blockedUserId: string) {
    await prisma.blockList.create({
        data: {
            userId: userId,
            blockedUserId: blockedUserId,
        },
    });
}

async function unblock(userId: string, blockedUserId: string) {
    await prisma.blockList.delete({
        where: { userId_blockedUserId: { userId, blockedUserId } },
    });
}

async function getBlockedUsers(userId: string) {
    const users = await prisma.blockList.findMany({
        where: { userId },
        include: {
            blockedUser: {
                select: {
                    id: true,
                    displayName: true,
                    username: true,
                },
            },
        },
    });
    return users;
}

async function isFriend(userId: string, friendId: string) {
    const foundEntry = await prisma.friends.findUnique({
        where: { userId_friendId: { userId, friendId } },
    });
    return !!foundEntry;
}

async function isRequestActive(userId: string, friendId: string) {
    const found = await prisma.friendRequest.findUnique({
        where: {
            requestFromId_requestToId: {
                requestFromId: userId,
                requestToId: friendId,
            },
        },
    });

    return !!found;
}

async function sendFriendRequest(userId: string, friendId: string) {
    await prisma.friendRequest.create({
        data: {
            requestFromId: userId,
            requestToId: friendId,
        },
    });
}

async function getAllActiveFriendRequests(userId: string) {
    const requests = await prisma.friendRequest.findMany({
        where: {
            requestFromId: userId,
        },
        include: {
            requestTo: {
                select: {
                    id: true,
                    displayName: true,
                    username: true,
                },
            },
        },
    });
}

export default {
    isBlocked,
    block,
    unblock,
    getBlockedUsers,
    isFriend,
    isRequestActive,
    sendFriendRequest,
    getAllActiveFriendRequests,
};
