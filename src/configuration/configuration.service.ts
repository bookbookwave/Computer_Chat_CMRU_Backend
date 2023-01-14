import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Configuration, ConfigurationCreateInput } from './../@generated';

@Injectable()
export class ConfigurationService {
  constructor(private readonly db: PrismaService) {}
  async getConfig(id: string): Promise<Configuration> {
    try {
      return await this.db.configuration.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async allConfig(): Promise<Configuration[]> {
    try {
      return await this.db.configuration.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async createConfig(input: ConfigurationCreateInput): Promise<Configuration> {
    try {
      return await this.db.configuration.create({
        data: {
          name: input.name,
          value: input.value,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateConfig(input: ConfigurationCreateInput): Promise<Configuration> {
    try {
      return await this.db.configuration.update({
        where: { id: input.id },
        data: {
          name: input.name,
          value: input.value,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteConfig(id: string): Promise<boolean> {
    try {
      const data = await this.db.configuration.delete({ where: { id: id } });
      if (data === undefined) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
