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

module.exports = { getUserByEmail, getUserById };
