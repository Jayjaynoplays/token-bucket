import { ConfigService } from '@nestjs/config';
import { UrlEntities } from 'src/modules/url-shorter/entities';
import { createConnection } from 'typeorm';

export const POSTGRES_DB_CONNECTION = 'POSTGRES_DB_CONNECTION';
export const databaseProviders = [
  {
    provide: POSTGRES_DB_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      return createConnection({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_DB_HOST'),
        port: parseInt(configService.get<string>('POSTGRES_PORT', ''), 10),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        synchronize: false,
        migrations: ['src/database/migrations/*{.ts,.js}'],
        entities: [UrlEntities],
      });
    },
    inject: [ConfigService],
  },
];
