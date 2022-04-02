import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  database: 'credits_db',
  username: 'root',
  password: 'starbot',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});
