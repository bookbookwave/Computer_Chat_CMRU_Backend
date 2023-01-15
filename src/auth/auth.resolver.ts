import { Args, Field, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { UtilsService } from '../utils/utils.service';
import { UserCreateInput } from './../@generated/index';
import { inputLogin, inputRegister } from './auth.dto';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly utilsService: UtilsService,
  ) {}

  @Mutation((returns) => String)
  async login(@Args('input') input: inputLogin): Promise<string> {
    return this.authService.signIn({
      email: input.email,
      password: input.password,
    });
  }
  @Mutation((returns) => String)
  async register(@Args('input') input: inputRegister): Promise<string> {
    if (input.password !== input.confirmPassword) {
      throw new Error('Password and confirm password do not match');
    }
    let avatar = 'https://via.placeholder.com/150x150';
    if (input.avatar) {
      const { file } = await input.avatar;
      avatar = await this.utilsService.singleUpload(await input.avatar);
    }

    return this.authService.signUp({ ...input, avatar: avatar });
  }
}
