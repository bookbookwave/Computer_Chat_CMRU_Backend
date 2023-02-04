import { Injectable } from '@nestjs/common';
import { UserProject, UserProjectCreateManyInput } from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserProjectService {
  constructor(private readonly db: PrismaService) {}
  findUserProject(id: string): Promise<UserProject> {
    try {
      return this.db.userProject.findFirst({ where: { userId: id } });
    } catch (error) {
      throw new Error(error);
    }
  }
  getUserProject = async (id: string): Promise<UserProject[]> => {
    try {
      return await this.db.userProject.findMany({
        where: { userId: id },
        include: { project: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  createUserProject = async (
    input: Array<UserProjectCreateManyInput>,
  ): Promise<void> => {
    try {
      const user = await this.db.userProject.createMany({ data: input });
      // console.log(user);
      // return user;
    } catch (error) {
      throw new Error(error);
    }
  };
  //   updateUserProject(
  //     input: UserProjectUncheckedCreateInput,
  //   ): Promise<UserProject> {
  //     try {
  //       return this.db.userProject.update({
  //         where: { projectId_userId },
  //         data: {
  //           project: { connect: { id: input.projectId } },
  //           user: { connect: { id: input.userId } },
  //         },
  //       });
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   }
  //   deleteUserProject(id: string): Promise<UserProject> {
  //     try {
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   }
}
