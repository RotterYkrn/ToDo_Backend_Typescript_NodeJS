// import express from "express";

// const app = express();

// const PORT = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
//     console.log(req);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
