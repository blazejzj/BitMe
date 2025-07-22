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

module.exports = {
    emailExists,
    usernameExists,
    getUserByEmail,
    getUserById,
    registerGuest,
    registerUser,
};
