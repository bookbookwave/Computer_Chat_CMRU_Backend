import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();
const status = [
  { name: 'Waiting For Confirm' },
  { name: 'Not Allowed' },
  { name: 'Lesson 1' },
  { name: 'Lesson 2' },
  { name: 'Lesson 3' },
  { name: 'Take A Test 1' },
  { name: 'Lesson 4' },
  { name: 'Lesson 5' },
  { name: 'Take A Test 2' },
  { name: 'Finished' },
];
const projectTypes = [
  { name: 'Management Information System' },
  { name: 'E-commerce System' },
  { name: 'Animation 2D or 3D' },
  { name: 'Electronic Education' },
  { name: 'Mobile Application' },
  { name: 'Hardware' },
  { name: 'Game' },
];

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: hashSync('admin', 10),
      name: 'Computer Administrator',
      role: 'ADMIN',
    },
  });
  await prisma.user.create({
    data: {
      email: 'wave@gmail.com',
      password: hashSync('1234', 10),
      name: 'Wave Administrator',
      role: 'ADMIN',
    },
  });
  await prisma.projectStatus.createMany({ data: status });
  await prisma.projectType.createMany({ data: projectTypes });

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `test${i}@test.com`,
        password: hashSync('test', 10),
        name: `test${i}`,
      },
    });
  }
}

main();
