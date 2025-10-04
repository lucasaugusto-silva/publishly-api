require('../../bootstrap');
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [path.resolve(__dirname, '..', 'database', 'models', '*{.ts,.js}')],
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*{.ts,.js}')],
  synchronize: false,
  ssl: true, 
  extra: {
    ssl: {
      rejectUnauthorized: false, 
    },
  },
};


export default options;
