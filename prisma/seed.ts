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
const Banner = [
  {
    title: 'Hello',
    image: 'https://picsum.photos/1280/320',
    link: 'https://picsum.photos/1280/320',
  },
  {
    title: 'Hello',
    image: 'https://picsum.photos/1280/320',
    link: 'https://picsum.photos/1280/320',
  },
  {
    title: 'Hello',
    image: 'https://picsum.photos/1280/320',
    link: 'https://picsum.photos/1280/320',
  },
  {
    title: 'Hello',
    image: 'https://picsum.photos/1280/320',
    link: 'https://picsum.photos/1280/320',
  },
  {
    title: 'Hello',
    image: 'https://picsum.photos/1280/320',
    link: 'https://picsum.photos/1280/320',
  },
];
const BlogNews = [
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ2',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ3',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ4',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ4',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ4',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ4',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
  {
    title: 'งานไม่เสร็จไม่ต้องกลับ4',
    content: 'บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    link: 'https://facebook.com',
  },
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

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `test${i}@test.com`,
        password: hashSync('test', 10),
        name: `test${i}`,
      },
    });
  }

  await prisma.projectStatus.createMany({ data: status });

  await prisma.projectType.createMany({ data: projectTypes });

  await prisma.banner.createMany({ data: Banner });

  await prisma.blogNews.createMany({ data: BlogNews });
}

main();
