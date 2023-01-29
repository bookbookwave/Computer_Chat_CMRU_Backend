import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `test${i}@test.com`,
        password: hashSync('test', 10),
        name: `test${i}`,
      },
    });
  }
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: hashSync('admin', 10),
      name: 'Computer Administrator',
    },
  });
}

main();
