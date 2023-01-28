import { ProjectTypeUncheckedCreateInput } from './../@generated/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectType } from 'src/@generated';
import { ProjectTypeService } from './project-type.service';

@Resolver()
export class ProjectTypeResolver {
  constructor(private readonly projectTypeService: ProjectTypeService) {}

  @Query((returns) => ProjectType)
  async findProjectType(@Args('id') id: string): Promise<ProjectType> {
    return this.projectTypeService.findProjectType(id);
  }
  @Query((returns) => [ProjectType])
  async getProjectType(): Promise<ProjectType[]> {
    return this.projectTypeService.getProjectType();
  }
  @Mutation((returns) => ProjectType)
  async createProjectType(
    @Args('input') input: ProjectTypeUncheckedCreateInput,
  ): Promise<ProjectType> {
    return this.projectTypeService.createProjectType(input);
  }
  @Mutation((returns) => ProjectType)
  async updateProjectType(
    @Args('input') input: ProjectTypeUncheckedCreateInput,
  ): Promise<ProjectType> {
    return this.projectTypeService.updateProjectType(input);
  }
  @Mutation((returns) => Boolean)
  async deleteProjectType(@Args('id') id: string): Promise<boolean> {
    return this.projectTypeService.deleteProjectType(id);
  }
}
