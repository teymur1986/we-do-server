import { Module } from '@nestjs/common';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';
import { WorksRepository } from './work.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorksRepository]),
  ],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}
