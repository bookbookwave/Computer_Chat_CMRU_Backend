import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project, ProjectUncheckedCreateInput } from 'src/@generated';
import { ProjectService } from './project.service';

@Resolver()
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query((returns) => Project)
  async project(@Args('id') id: string): Promise<Project> {
    return await this.projectService.findProject(id);
  }
  @Query((returns) => [Project])
  async projects(): Promise<Project[]> {
    return await this.projectService.getProjects();
  }
  @Query((returns) => [Project])
  async projectsById(@Args('id') id: string): Promise<Project[]> {
    return await this.projectService.getProjectsById(id);
  }
  @Mutation((returns) => Project)
  async createProject(
    @Args('input') input: ProjectUncheckedCreateInput,
  ): Promise<Project> {
    return await this.projectService.createProject(input);
  }
  @Mutation((returns) => Project)
  async updateProject(
    @Args('input') input: ProjectUncheckedCreateInput,
  ): Promise<Project> {
    return await this.projectService.updateProject(input);
  }
  @Mutation((returns) => String)
  async deleteProject(@Args('id') id: string): Promise<boolean> {
    return await this.projectService.deleteProject(id);
  }
}
