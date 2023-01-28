import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  ProjectStatus,
  ProjectStatusUncheckedCreateInput,
} from 'src/@generated';
import { ProjectStatusService } from './project-status.service';

@Resolver()
export class ProjectStatusResolver {
  constructor(public projectStatusService: ProjectStatusService) {}

  @Query((returns) => ProjectStatus)
  async fineStatus(@Args('id') id: string): Promise<ProjectStatus> {
    return this.projectStatusService.findProjectStatus(id);
  }
  @Query((returns) => [ProjectStatus])
  async getStatus(): Promise<ProjectStatus[]> {
    return this.projectStatusService.getProjectStatus();
  }
  @Mutation((returns) => ProjectStatus)
  async createStatus(
    @Args('input') input: ProjectStatusUncheckedCreateInput,
  ): Promise<ProjectStatus> {
    return this.projectStatusService.createProjectStatus(input);
  }
  @Mutation((returns) => ProjectStatus)
  async updateStatus(
    @Args('input') input: ProjectStatusUncheckedCreateInput,
  ): Promise<ProjectStatus> {
    return this.projectStatusService.updateProjectStatus(input);
  }
  @Mutation((returns) => Boolean)
  async deleteStatus(@Args('id') id: string): Promise<boolean> {
    return this.projectStatusService.deleteProjectStatus(id);
  }
}
