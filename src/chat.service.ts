import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  constructor(private readonly db: PrismaService) {}

  //   fetch user chats
  async fetchProject(id: string) {
    return this.db.project.findUnique({
      where: {
        id,
      },
    });
  }

  // fech project from user id
  //   เอาไว้ดึง project ที่ user นั้นเป็น owner ออกมา
  async fetchProjectFromUserId(id: string) {
    return this.db.project.findMany({
      where: {
        UserProject: {
          some: {
            userId: id,
          },
        },
      },
    });
  }

  //   fetch user in project
  //   ดึง user ที่เป็น member ของ project นั้นออกมา
  async fetchUserInProject(id: string) {
    return this.db.user.findMany({
      where: {
        UserProject: {
          some: {
            projectId: id,
          },
        },
      },
    });
  }

  //   save message
  async saveMessage(data: {
    projectId: string;
    userId: string;
    message: string;
  }) {
    return this.db.message.create({
      data: {
        project: {
          connect: {
            id: data.projectId,
          },
        },
        author: {
          connect: {
            id: data.userId,
          },
        },
        message: data.message,
      },
    });
  }

  //   fetch message
  async fetchMessage(id: string) {
    return this.db.message.findMany({
      where: {
        projectId: id,
      },
      include: {
        author: true,
        project: true,
      },
    });
  }

  // fetch history message from project id
  async fetchHistoryMessage(id: string) {
    return this.db.message.findMany({
      where: {
        projectId: id,
      },
      include: {
        author: true,
        project: true,
      },
      take: 50,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
