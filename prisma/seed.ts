import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();
const status = [
  { name: 'New Project' },
  { name: 'Chapter 1' },
  { name: 'Chapter 2' },
  { name: 'Chapter 3' },
  { name: 'Chapter 4' },
  { name: 'Chapter 5' },
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
    image: '5LFL980rI-6498a1f6a228ee43f7d49e4010ca57ce839441524.jpeg',
    link: 'https://picsum.photos/1280/320',
  },
];
const BlogNews = [
  {
    title: 'นศ.ที่มีปัญหา Host ภาควิชาไม่รองรับการใช้งาน ',
    content: `นศ.ที่มีปัญหา Host ภาควิชาไม่รองรับการใช้งาน ให้ใช้ Host อื่นที่มีอายุ>1 ปีแทนได้

    สามารถใช้งาน Host ฟรี พื้นที่ 300 MB จำกัด 1 Web+Bandwidth 3 GB+1 FTP Account+1 MySQL Database+PHP5.2-PHP8.0 ได้ที่ https://www.000webhost.com เลือกเมนู Free sign up
    กรุณาศึกษาการใช้งานเอง
    1. สร้างเว็บใหม่ เลือก Create Website
    2. จัดการ Website เลือก Manage Website
    3. จัดการ File เข้าไปที่เมนู Tool เลือก File Manage
    4. จัดการ DB ข้าไปที่เมนู Tool เลือก Database Manager
    5. จัดการ FTP + PHP Version เข้าไปที่เมนู Web Setting เลือก General`,
    link: 'https://www.facebook.com/groups/445808458787639/permalink/5996906093677820/',
  },
  {
    title: 'ความก้าวหน้านศ.ลงเรียนเทอม 2/2565',
    content: `1. นศ.ที่จะมีสิทธิ์ได้เกรด IP ต้อง **มีคะแนนสอบบท1-3** จากกรรมการสอบครบ 3 ท่าน และ**หัวข้อไม่หมดอายุ ก่อนวันแรกสอบ Final** (ภายในวันที่22ก.พ.66)⚡️⚡️
    - แม้ว่านศ.มีสิทธิ์ได้เกรด IP แต่อ.ที่ปรึกษาหรือผู้สอนเห็นว่างานไม่มีความคืบหน้า อาจจะให้เกรด F ก็ได้ ‼️
    - นศ.ที่ได้เกรด IP ต้องส่งเล่มสมบูรณ์ฯ แก้เกรด IP ภายในระยะเวลากำหนด หากไม่ส่งเล่มฯ จะได้เกรด F
    2. นศ.ที่ไม่ได้เกรด IP หากไม่ส่งเล่มฯ จะได้เกรด F
    3. นศ.ค้างชั้นที่มีสภาพเป็นนศ.เทอมสุดท้าย **ไม่มีสิทธิ์ได้เกรด IP** ต้องส่งเล่มให้ทัน และยื่นขอสำเร็จการศึกษาก่อนสิ้นเทอมสุดท้าย (ถ้าไม่ส่งเล่มการศึกษาอิสระ จะพ้นสภาพนศ.)
    - คบ.ปี10 ไม่สามารถเปลี่ยนสภานะเป็นภาคพิเศษ ต้องส่งเล่มสมบูรณ์ฯให้ทัน ก่อนสิ้นเทอม2!!!
    - วทบ.ภาคปกติปี 8 ที่มีสถานะเป็นนศ.เทอมสุดท้าย หากคาดว่าส่งเล่มสมบูรณ์ฯ ไม่ทัน จะต้องยื่นคำร้องขอเปลี่ยนสถานะเป็น "นศ.ภาคพิเศษ" และได้รับอนุมัติ "รหัสนศ.ใหม่ (ภาคพิเศษ)" ก่อนสิ้นสุดเทอม 2 จึงจะมีสิทธิ์ได้รับพิจารณาเกรด IP หรือ สามารถลงเรียนใหม่ ในเทอม 3 ได้
    - คบ.ปี10+วทบ.ปี 8 ที่ไม่มีอ.ที่ปรึกษาหัวข้อ ให้ขอ อ.ที่ปรึกษาหมู่เรียน หรือหน้าภาค รับเป็นอ.ที่ปรึกษาหัวข้อ แล้วรีบยื่นสอบ+ส่งเล่มฯให้ทัน
    4. นศ.ที่คะแนนไม่ครบ ให้นศ.ไปถามอ.ที่ปรึกษาหัวข้อ ขอท่านเช็คดูในระบบ istudy เมนู "คะแนนสอบ" ว่ากรรมการท่านใดค้างกรอกคะแนนสอบบทที่1-3 และขอให้กรรมการส่งคะแนนสอบให้ทัน ***ก่อน`,
    link: 'https://www.facebook.com/groups/445808458787639/permalink/5996879700347126/',
  },
];

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: hashSync('admin', 10),
      name: 'Computer Administrator',
      role: 'ADMIN',
      credentialId: 0,
    },
  });
  await prisma.user.create({
    data: {
      email: 'wave@gmail.com',
      password: hashSync('1234', 10),
      name: 'Wave Administrator',
      role: 'ADMIN',
      credentialId: 1,
    },
  });

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `6214311${i}@gmail.com`,
        password: hashSync('test', 10),
        name: `นาย ${i}`,
        credentialId: 62143110 + i,
      },
    });
  }

  await prisma.projectStatus.createMany({ data: status });

  await prisma.projectType.createMany({ data: projectTypes });

  await prisma.banner.createMany({ data: Banner });

  await prisma.blogNews.createMany({ data: BlogNews });
}

main();
