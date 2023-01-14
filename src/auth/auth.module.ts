import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UtilsService } from '../utils/utils.service';
import { PrismaService } from '../prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1y' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    PrismaService,
    AuthResolver,
    UtilsService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
