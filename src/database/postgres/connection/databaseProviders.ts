import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const POSTGRES_DB_CONNECTION = 'POSTGRES_DB_CONNECTION';
export const databaseProviders = [
  {
    provide: POSTGRES_DB_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      try {
        const dataSource = new DataSource({
          type: 'postgres',
          host: configService.get<string>('POSTGRES_DB_HOST'),
          port: parseInt(configService.get<string>('POSTGRES_PORT'), 10),
          username: configService.get<string>('POSTGRES_USER'),
          password: configService.get<string>('POSTGRES_PASSWORD'),
          database: configService.get<string>('POSTGRES_DB'),
        });

        await dataSource.initialize();
        console.log('Database connected successfully');
        return dataSource;
      } catch (error) {
        console.error('Error when connecting to database');
      }
    },
    inject: [ConfigService],
  },
];
