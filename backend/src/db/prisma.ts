const {
    PrismaClient,
} = require("../../prisma/app/generated/prisma/client/client");
const prisma = new PrismaClient();
module.exports = prisma;
