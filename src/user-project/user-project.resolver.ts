import {
  Args,
  Resolver,
  Mutation,
  Query,
  InputType,
  Field,
} from '@nestjs/graphql';
import { UserProjectService } from './user-project.service';
import { UserProject, UserProjectCreateManyInput } from 'src/@generated';

@InputType()
class InputProjects {
  // array of objects
  @Field((type) => [UserProjectCreateManyInput])
  data: [UserProjectCreateManyInput];
}

@Resolver()
export class UserProjectResolver {
  constructor(private readonly userProjectService: UserProjectService) {}

  @Query((returns) => UserProject)
  async findUserProject(@Args('id') id: string): Promise<UserProject> {
    return this.userProjectService.findUserProject(id);
  }
  @Query((returns) => [UserProject])
  async getUserProject(@Args('id') id: string): Promise<UserProject[]> {
    return this.userProjectService.getUserProject(id);
  }

  @Mutation((returns) => Boolean)
  async createUserProject(
    @Args('input') input: InputProjects,
  ): Promise<boolean> {
    console.log(input);
    await this.userProjectService.createUserProject(input.data);
    return true;
  }
  //   @Mutation((returns) => UserProject)
  //   async updateUserProject(
  //     @Args('input') input: UserProjectUncheckedCreateInput,
  //   ): Promise<UserProject> {
  //     return this.userProjectService.updateUserProject(input);
  //   }
  //   @Mutation((returns) => Boolean)
  //   async deleteUserProject(@Args('id') id: string): Promise<boolean> {
  //     return this.userProjectService.deleteUserProject(id);
  //   }
}
