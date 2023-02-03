import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UtilsService } from '../utils/utils.service';
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
    let avatar = 'https://picsum.photos/300/300';
    if (input.avatar) {
      avatar = input.avatar;
      // avatar = await this.utilsService.singleUpload(input.avatar);
    }
    return this.authService.signUp({ ...input, avatar: avatar });
  }
}
