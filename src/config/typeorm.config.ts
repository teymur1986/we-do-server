import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'Gfhjkm',
    database: 'we-do',
    entities: [`${__dirname}/../**/*.entity.ts`],
    synchronize: true,
}
