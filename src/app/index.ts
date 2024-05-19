import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UrlShorterModule } from '../modules';
import { PostgresDatabaseModule } from '../database';
import { AppControllers } from './controllers';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresDatabaseModule,
    UrlShorterModule,
  ],
  controllers: [AppControllers],
})
export class AppModule {}
