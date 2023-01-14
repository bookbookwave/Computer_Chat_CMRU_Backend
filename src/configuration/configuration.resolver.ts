import { Configuration, ConfigurationCreateInput } from './../@generated';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConfigurationService } from './configuration.service';

@Resolver()
export class ConfigurationResolver {
  constructor(private readonly configService: ConfigurationService) {}
  @Query((returns) => Configuration)
  async configuration(@Args('id') id: string): Promise<Configuration> {
    return await this.configService.getConfig(id);
  }
  @Query((returns) => Configuration)
  async configurations(): Promise<Configuration[]> {
    return await this.configService.allConfig();
  }
  @Mutation((returns) => Configuration)
  async createConfig(
    @Args('input') input: ConfigurationCreateInput,
  ): Promise<Configuration> {
    return await this.configService.createConfig(input);
  }
  @Mutation((returns) => Configuration)
  async updateConfig(
    @Args('input') input: ConfigurationCreateInput,
  ): Promise<Configuration> {
    return await this.configService.updateConfig(input);
  }
  @Mutation((returns) => Boolean)
  async deleteConfig(@Args('id') id: string): Promise<boolean> {
    return await this.configService.deleteConfig(id);
  }
}
