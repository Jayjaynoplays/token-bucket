import { Module } from '@nestjs/common';
import { UrlShorterController } from './controllers';

@Module({
  controllers: [UrlShorterController],
})
export class UrlShorterModule {}
