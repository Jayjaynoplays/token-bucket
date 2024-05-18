import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateShortedUrlDto } from '../dto/create-shorted-url.dto';

@Controller('url-shorter')
@UsePipes(new ValidationPipe({ transform: true }))
export class UrlShorterController {
  @Post()
  async getShortedUrl(@Body() request: CreateShortedUrlDto) {
    return request.url;
  }
}
