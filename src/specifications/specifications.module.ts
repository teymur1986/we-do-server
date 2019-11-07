import { Module } from '@nestjs/common';
import { SpecificationsController } from './specifications.controller';
import { SpecificationsService } from './specifications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecificationRepository } from './specification.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SpecificationRepository]),
  ],
  controllers: [SpecificationsController],
  providers: [SpecificationsService],
})
export class SpecificationsModule {}
