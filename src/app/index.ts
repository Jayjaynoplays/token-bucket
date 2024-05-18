import { Module } from '@nestjs/common';
import { AppControllers } from './controllers';
import { UrlShorterModule } from '../modules';

@Module({
  imports: [UrlShorterModule],
  controllers: [AppControllers],
})
export class AppModule {}
