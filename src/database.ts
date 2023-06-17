import { DataSource, DataSourceOptions } from 'typeorm';
import { SmartGen } from './device.entity';
import { vars } from "./types";

export const DbConfig: DataSourceOptions = {
  type: 'postgres',
  username :  vars.username,
  host : vars.host,
  database : vars.database,
  password : vars.password,
  port: vars.port,
  ssl: true,
  synchronize: true,
  logging: false,
  entities: [SmartGen],
  
  // migrations: ['dist/migration/*{.ts,.js}'],
  // subscribers: ['subscriber/**/*.ts'],
};

export const AppDataSource = new DataSource({ ...DbConfig });
