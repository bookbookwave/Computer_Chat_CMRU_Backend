import {
  loginTime,
  loginTimeUncheckedCreateInput,
} from './../@generated/index';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LogLoginService {
  constructor(private readonly prisma: PrismaService) {}
  getLogs(): Promise<loginTime[]> {
    try {
      return this.prisma.loginTime.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }
  getLogById(id: string): Promise<loginTime[]> {
    try {
      return this.prisma.loginTime.findMany({ where: { userId: id } });
    } catch (error) {
      throw new Error(error);
    }
  }
  createLogLogin(input: loginTimeUncheckedCreateInput): Promise<loginTime> {
    try {
      return this.prisma.loginTime.create({
        data: { author: { connect: { id: input.userId } } },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  deleteLogLogin(id: string): Promise<loginTime> {
    try {
      return this.prisma.loginTime.delete({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  }
}
