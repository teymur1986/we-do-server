import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { WorkerRepository } from './worker.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkerRepository]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
