import { loginTimeUncheckedCreateInput } from './../@generated/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { loginTime } from 'src/@generated';
import { LogLoginService } from './log-login.service';

@Resolver()
export class LogLoginResolver {
  constructor(private readonly LogLoginService: LogLoginService) {}

  @Query((returns) => [loginTime])
  async getLogs(): Promise<loginTime[]> {
    return this.LogLoginService.getLogs();
  }
  @Query((returns) => [loginTime])
  async getLogById(@Args('id') id: string): Promise<loginTime[]> {
    return this.LogLoginService.getLogById(id);
  }
  @Mutation((returns) => loginTime)
  async createLogLogin(
    @Args('input') input: loginTimeUncheckedCreateInput,
  ): Promise<loginTime> {
    return this.LogLoginService.createLogLogin(input);
  }
  @Mutation((returns) => loginTime)
  async deleteLogLogin(@Args('id') id: string): Promise<loginTime> {
    return this.LogLoginService.deleteLogLogin(id);
  }
}
