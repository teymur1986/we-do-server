import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WorkersModule } from './workers/workers.module';
import { SpecificationsModule } from './specifications/specifications.module';
import { ImagesModule } from './images/images.module';
import { WorksModule } from './works/works.module';

@Module({
  imports: [WorkersModule, SpecificationsModule, ImagesModule, WorksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
