import { DataSource, DataSourceOptions } from 'typeorm';
import { SmartGen } from './device.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const DbConfig: DataSourceOptions = {
	type: 'postgres',
	username: process.env.DBUSERNAME,
	host: process.env.HOST,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432,
	synchronize: true,
	logging: false,
	entities: [SmartGen],
	ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
	// migrations: ['dist/migration/*{.ts,.js}'],
	// subscribers: ['subscriber/**/*.ts'],
  };
  
export const AppDataSource = new DataSource({ ...DbConfig });
