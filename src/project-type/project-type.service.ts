import { Injectable } from '@nestjs/common';
import { ProjectType, ProjectTypeUncheckedCreateInput } from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectTypeService {
  constructor(private readonly db: PrismaService) {}
  findProjectType = async (id: string): Promise<ProjectType> => {
    try {
      return await this.db.projectType.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  };
  getProjectType = async (): Promise<ProjectType[]> => {
    try {
      return await this.db.projectType.findMany();
    } catch (error) {
      throw new Error(error);
    }
  };
  createProjectType = async (
    input: ProjectTypeUncheckedCreateInput,
  ): Promise<ProjectType> => {
    try {
      return await this.db.projectType.create({ data: { name: input.name } });
    } catch (error) {
      throw new Error(error);
    }
  };
  updateProjectType = async (
    input: ProjectTypeUncheckedCreateInput,
  ): Promise<ProjectType> => {
    try {
      return await this.db.projectType.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteProjectType = async (id: string): Promise<boolean> => {
    try {
      const type = await this.db.projectType.delete({ where: { id: id } });
      if (!type) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  };
}
