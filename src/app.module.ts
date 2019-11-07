import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WorkersModule } from './workers/workers.module';
import { SpecificationsModule } from './specifications/specifications.module';
import { ImagesModule } from './images/images.module';
import { WorksModule } from './works/works.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    WorkersModule,
    SpecificationsModule,
    ImagesModule,
    WorksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
