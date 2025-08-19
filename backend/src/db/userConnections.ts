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
    return requests;
}

async function removeFriendRequest(fromId: string, toId: string) {
    const res = await prisma.friendRequest.deleteMany({
        where: { requestFromId: fromId, requestToId: toId },
    });
    return res.count;
}

async function rejectFriendRequest(fromId: string, toId: string) {
    const res = await prisma.friendRequest.deleteMany({
        where: { requestFromId: fromId, requestToId: toId },
    });
    return res.count;
}

async function acceptFriendRequest(fromId: string, toId: string) {
    // fromId = A (sender), toId = B (receiver)
    // create friendship both ways, remove any requests between A and B
    await prisma.$transaction([
        // transaction because all of them have to be successfull
        prisma.friends.upsert({
            where: { userId_friendId: { userId: fromId, friendId: toId } },
            create: { userId: fromId, friendId: toId },
            update: {},
        }),
        prisma.friends.upsert({
            where: { userId_friendId: { userId: toId, friendId: fromId } },
            create: { userId: toId, friendId: fromId },
            update: {},
        }),
        prisma.friendRequest.deleteMany({
            where: { requestFromId: fromId, requestToId: toId },
        }),
        prisma.friendRequest.deleteMany({
            where: { requestFromId: toId, requestToId: fromId },
        }),
    ]);
}

async function removeFriend(userId: string, friendId: string) {
    await prisma.$transaction([
        prisma.friends.deleteMany({ where: { userId, friendId } }),
        prisma.friends.deleteMany({
            where: { userId: friendId, friendId: userId },
        }),
    ]);
}

async function getFriends(userId: string) {
    const rows = await prisma.friends.findMany({
        where: { userId },
        orderBy: { friendsSince: "desc" },
        include: {
            friend: {
                select: {
                    id: true,
                    displayName: true,
                    username: true,
                    photoUrl: true,
                },
            },
        },
    });

    return rows.map((r) => r.friend);
}

async function getIncomingFriendRequests(userId: string) {
    return prisma.friendRequest.findMany({
        where: { requestToId: userId },
        include: {
            requestFrom: {
                select: {
                    id: true,
                    displayName: true,
                    username: true,
                    photoUrl: true,
                },
            },
        },
        orderBy: { requestedAt: "desc" },
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
    removeFriendRequest,
    rejectFriendRequest,
    acceptFriendRequest,
    removeFriend,
    getFriends,
    getIncomingFriendRequests,
};
