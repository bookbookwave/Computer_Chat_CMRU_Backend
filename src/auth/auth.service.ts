import { Role, User, UserCreateInput } from './../@generated';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync, hashSync } from 'bcryptjs';
import * as dotenv from 'dotenv';
import { PrismaService } from 'src/prisma.service';
dotenv.config();

export type JWTPayLoad = {
  exp?: number;
  iat?: number;
  userId: string;
};
@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly db: PrismaService,
  ) {}

  private signToken(payload: JWTPayLoad) {
    return this.jwt.signAsync(payload);
  }

  async validateUser(payload: JWTPayLoad): Promise<User> {
    const user = await this.db.user.findFirst({
      where: {
        id: payload.userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        `User with id ${payload.userId} does not exist.`,
      );
    }

    return user;
  }

  async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<string> {
    const found: User = await this.db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!found) {
      throw new NotFoundException(`User's email : ${email} doesn't exist.`);
    }

    const isPasswordValid = await compareSync(password, found.password);

    if (!isPasswordValid) {
      throw new Error(`Password is incorrect, Try again...`);
    } else {
      const token = this.signToken({
        userId: found.id,
      });
      return token;
    }
  }

  async signUp(
    input: Omit<UserCreateInput, 'avatar'> & { avatar: string },
  ): Promise<string> {
    const created: User = await this.db.user.create({
      data: {
        email: input.email,
        password: hashSync(input.password, 10),
        name: input.name,
        avatar: input.avatar,
        role: Role.USER,
      },
    });

    return await this.jwt.sign({
      email: created.email,
      sub: created.id,
    });
  }
}
