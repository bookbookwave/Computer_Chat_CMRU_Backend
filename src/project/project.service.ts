import { Injectable } from '@nestjs/common';
import { Project, ProjectUncheckedCreateInput } from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly db: PrismaService) {}
  findProject = async (id: string): Promise<Project> => {
    return this.db.project.findFirst({ where: { id: id } });
  };
  getProjects = (): Promise<Project[]> => {
    return this.db.project.findMany({
      include: { status: true, projectType: true },
    });
  };
  getProjectsById = (id: string): Promise<Project[]> => {
    return this.db.project.findMany({
      where: {
        UserProject: {
          some: {
            userId: id,
          },
        },
      },
      include: { projectType: true, status: true },
    });
  };
  createProject = async (
    input: ProjectUncheckedCreateInput,
  ): Promise<Project> => {
    try {
      return this.db.project.create({
        data: {
          id: input.id,
          nameTH: input.nameTH,
          nameEN: input.nameEN,
          status: { connect: { id: input.statusId } },
          projectType: { connect: { id: input.typeId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  updateProject = async (
    input: ProjectUncheckedCreateInput,
  ): Promise<Project> => {
    try {
      return this.db.project.update({
        where: { id: input.id },
        data: {
          nameEN: input.nameEN,
          nameTH: input.nameTH,
          status: { connect: { id: input.statusId } },
          projectType: { connect: { id: input.typeId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteProject = async (id: string): Promise<boolean> => {
    try {
      // await this.db.userProject.deleteMany({ where: { projectId: id } });
      const userProject = await this.db.userProject.deleteMany({
        where: { projectId: id },
      });
      const project = this.db.project.delete({ where: { id: id } });
      if (!project && !userProject) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  };
}
