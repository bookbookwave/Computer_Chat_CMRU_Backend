import { UserUncheckedCreateInput } from './../@generated/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../@generated';
import { UtilsService } from '../utils/utils.service';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly utilsService: UtilsService,
  ) {}

  @Query((returns) => User)
  async user(@Args('id') id: string) {
    return await this.userService.findUser(id);
  }
  @Query((returns) => [User])
  async users() {
    return await this.userService.getUsers();
  }

  @Mutation((returns) => User)
  async createUser(
    @Args('input') input: UserUncheckedCreateInput,
  ): Promise<User> {
    let avatar = 'https://picsum.photos/300/300';
    console.log('input :>> ', input);
    if (input.avatar) {
      avatar = input.avatar;
      // avatar = await this.utilsService.singleUpload(input.avatar);
    }
    return await this.userService.createUser({ ...input, avatar: avatar });
  }
  @Mutation((returns) => User)
  async updateUser(
    @Args('input') input: UserUncheckedCreateInput,
  ): Promise<User> {
    let avatar = 'https://picsum.photos/300/300';
    if (input.avatar) {
      avatar = input.avatar;
      // avatar = await this.utilsService.singleUpload(input.avatar);
    }
    return this.userService.updateUser({ ...input, avatar: avatar });
  }

  @Mutation((returns) => String)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
