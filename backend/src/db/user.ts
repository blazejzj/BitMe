export {};
const prisma = require("./prisma");

async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
}

async function getUserById(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
}

async function registerUser(
    email: string,
    password: string,
    username: string,
    displayName: string,
    photoUrl: string
) {
    return prisma.user.create({
        data: { email, password, username, displayName, photoUrl },
    });
}

async function registerGuest(
    id: string,
    email: string,
    password: string,
    username: string,
    displayName: string,
    photoUrl: string,
    role: string
) {
    return prisma.user.create({
        data: {
            id,
            email,
            password,
            username,
            displayName,
            photoUrl,
            role,
        },
    });
}

async function emailExists(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    return !!user;
}

async function usernameExists(username: string) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    });
    return !!user;
}

async function updateLastseenAt(id: string) {
    await prisma.user.update({
        where: {
            id,
        },
        data: {
            lastSeenAt: new Date(),
        },
    });
}

async function updateEmail(userId: string, newEmail: string) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            email: newEmail,
        },
    });
}

async function updateUsername(userId: string, newUsername: string) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            username: newUsername,
        },
    });
}

async function updatePassword(userId: string, newPassword: string) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            password: newPassword,
        },
    });
}

async function updateDisplayName(userId: string, newDisplayName: string) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            displayName: newDisplayName,
        },
    });
}

module.exports = {
    emailExists,
    usernameExists,
    getUserByEmail,
    getUserById,
    registerGuest,
    registerUser,
    updateLastseenAt,
    updateDisplayName,
    updateEmail,
    updatePassword,
    updateUsername,
};
