import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'silkyland@gmail.com',
      password: hashSync('1234', 10),
    },
  });
}

main();
