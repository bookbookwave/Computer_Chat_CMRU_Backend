import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ConfigurationResolver } from './configuration.resolver';
import { ConfigurationService } from './configuration.service';

@Module({
  providers: [ConfigurationResolver, ConfigurationService, PrismaService],
})
export class ConfigurationModule {}
