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
    email: string,
    password: string,
    username: string,
    displayName: string,
    photoUrl: string,
    role: string,
    creationDate: Date,
    lastSeenAt: Date
) {
    return prisma.user.create({
        data: {
            email,
            password,
            username,
            displayName,
            photoUrl,
            role,
            creationDate,
            lastSeenAt,
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

module.exports = {
    emailExists,
    getUserByEmail,
    getUserById,
    registerGuest,
    registerUser,
};
