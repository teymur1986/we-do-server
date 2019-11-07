import { Module } from '@nestjs/common';
import { WorkersModule } from './workers/workers.module';
import { SpecificationsModule } from './specifications/specifications.module';
import { ImagesModule } from './images/images.module';
import { WorksModule } from './works/works.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    WorkersModule,
    SpecificationsModule,
    ImagesModule,
    WorksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AppointmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
