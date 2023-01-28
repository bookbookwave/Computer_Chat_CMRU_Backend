import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import {
  ProjectStatus,
  ProjectStatusUncheckedCreateInput,
} from '../@generated';

@Injectable()
export class ProjectStatusService {
  constructor(private readonly db: PrismaService) {}
  findProjectStatus = async (id: string): Promise<ProjectStatus> => {
    try {
      return await this.db.projectStatus.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  };
  getProjectStatus = async (): Promise<ProjectStatus[]> => {
    return await this.db.projectStatus.findMany();
  };
  createProjectStatus = async (
    input: ProjectStatusUncheckedCreateInput,
  ): Promise<ProjectStatus> => {
    try {
      return await this.db.projectStatus.create({
        data: {
          name: input.name,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  updateProjectStatus = async (
    input: ProjectStatusUncheckedCreateInput,
  ): Promise<ProjectStatus> => {
    try {
      return await this.db.projectStatus.update({
        where: { id: input.id },
        data: {
          name: input.name,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteProjectStatus = async (id: string): Promise<boolean> => {
    try {
      const status = await this.db.projectStatus.delete({ where: { id: id } });
      if (!status) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
}
