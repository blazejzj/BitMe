export {};
import prisma from "./prisma";
import type { Role } from "@prisma/client";

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

async function getUserByUsername(username: string) {
    const user = await prisma.user.findUnique({
        where: { username },
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
    photoUrl: string | null,
    role: Role
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

async function userIdExists(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
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

export default {
    emailExists,
    usernameExists,
    userIdExists,
    getUserByEmail,
    getUserById,
    getUserByUsername,
    registerGuest,
    registerUser,
    updateLastseenAt,
    updateDisplayName,
    updateEmail,
    updatePassword,
    updateUsername,
};
