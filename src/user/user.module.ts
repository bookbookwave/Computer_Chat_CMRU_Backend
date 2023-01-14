import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma.service';
import { UtilsService } from '../utils/utils.service';

@Module({
  imports: [],
  providers: [UserService, UserResolver, PrismaService, UtilsService],
  controllers: [],
})
export class UserModule {}
