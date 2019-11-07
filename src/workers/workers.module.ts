import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { WorkerRepository } from './worker.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule} from '@nestjs/jwt';
import { PassportModule} from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'we-do-you-do',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([WorkerRepository]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class WorkersModule {}
