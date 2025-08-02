const prisma = require("./prisma");

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

module.exports = {
    isBlocked,
    block,
    unblock,
};
