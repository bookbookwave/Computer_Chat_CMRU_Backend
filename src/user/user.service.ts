import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Role, User, UserUncheckedCreateInput } from '../@generated';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async findUser(id: string): Promise<User> {
    return this.db.user.findFirst({ where: { id: id } });
  }
  async getUsers() {
    return this.db.user.findMany();
  }

  async createUser(
    input: Omit<UserUncheckedCreateInput, 'avatar'> & { avatar: string },
  ): Promise<User> {
    try {
      const user = await this.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
          role: input.role ?? Role.USER,
          avatar: input.avatar,
        },
      });
      return {
        ...user,
        role: user.role == 'ADMIN' ? Role.ADMIN : Role.USER,
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
          password: input.password,
          email: input.email,
          role: input.role,
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
