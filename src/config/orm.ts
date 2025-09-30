require('../../bootstrap');
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [path.resolve(__dirname, '..', 'database', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*')],
  cli: {
    entitiesDir: '../database/models',
    migrationsDir: 'src/database/migrations',
  },
};

export default options;
