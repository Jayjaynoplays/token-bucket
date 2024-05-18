import { Module } from '@nestjs/common';
import { UrlShorterController } from './controllers';
import { UrlShorterService } from './services';

@Module({
  controllers: [UrlShorterController],
  providers: [UrlShorterService],
})
export class UrlShorterModule {}
