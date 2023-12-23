import { DataSource, DataSourceOptions } from 'typeorm';
import { SmartGen } from './device.entity';


export const DbConfig: DataSourceOptions = {
	type: 'postgres',
	username: process.env.username,
	host: process.env.host,
	database: process.env.database,
	password: process.env.password,
	port: process.env.port ? parseInt(process.env.port, 10) : 5432,
	ssl: {
	  rejectUnauthorized: false, 
	},
	synchronize: true,
	logging: false,
	entities: [SmartGen],
	
	// migrations: ['dist/migration/*{.ts,.js}'],
	// subscribers: ['subscriber/**/*.ts'],
  };
  

export const AppDataSource = new DataSource({ ...DbConfig });
