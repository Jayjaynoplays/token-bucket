import { Module } from '@nestjs/common';
import { AppControllers } from './controllers';
import { UserModule, UrlShorterModule } from '../modules';

@Module({
  imports: [UserModule, UrlShorterModule],
  controllers: [AppControllers],
})
export class AppModule {}
