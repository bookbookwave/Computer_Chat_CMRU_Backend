import { hashSync } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Role, User, UserUncheckedCreateInput } from '../@generated';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async findUser(id: string): Promise<User> {
    return this.db.user.findFirst({ where: { id: id } });
  }
  async getUsers(): Promise<User[]> {
    try {
      return this.db.user.findMany();
    } catch (error) {
      console.log('None :>> ');
    }
  }
  getUserNoProject = async (): Promise<User[]> => {
    const user = await this.db.user.findMany({});
    const userProject = await this.db.userProject.findMany({});

    const userNoProject = user.filter((user) => {
      return !userProject.some((project) => {
        if (user.role === 'STUDENT') {
          return user.id === project.userId;
        }
      });
    });
    return userNoProject;
  };

  async createUser(
    input: Omit<UserUncheckedCreateInput, 'avatar'> & { avatar: string },
  ): Promise<User> {
    try {
      const user = await this.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashSync(input.password, 10),
          role: input.role,
          avatar: input.avatar,
          credentialId: input.credentialId,
        },
      });
      return {
        ...user,
        role: user.role === 'ADMIN' ? Role.ADMIN : Role.STUDENT,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUser(
    input: Omit<UserUncheckedCreateInput, 'avatar'> & { avatar: string },
  ): Promise<User> {
    try {
      return this.db.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          password: hashSync(input.password, 10),
          email: input.email,
          role: input.role,
          avatar: input.avatar,
          credentialId: input.credentialId,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteUser(id: string): Promise<boolean> {
    try {
      const User = await this.db.user.delete({ where: { id: id } });
      if (!User) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
