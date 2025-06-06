import bcrypt from "bcryptjs";

import { Role } from "./generated/prisma";
import { prisma } from "./prisma-client";

async function main() {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: "admin@admin.com",
      },
    });
    if (existingUser) {
      console.log("Admin user already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin2025@@@", 10);

    const user = await prisma.user.create({
      data: {
        email: "admin@admin.com",
        password: hashedPassword,
        role: Role.ADMIN,
      },
    });
    console.log(`Admin user created: ${user.email}`);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
