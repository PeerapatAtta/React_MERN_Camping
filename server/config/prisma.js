const {PrismaClient} = require('@prisma/client');
// Adjust the import based on your Prisma setup

const prisma = new PrismaClient();

module.exports = prisma;
// This file is used to configure Prisma Client and connect to the database.
// It initializes a new PrismaClient instance and exports it for use in other parts of the application.
// Make sure to handle errors and close the connection properly in your application.