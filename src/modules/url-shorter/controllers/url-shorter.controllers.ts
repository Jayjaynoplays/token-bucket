import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateShortedUrlDto } from '../dto/create-shorted-url.dto';
import { UrlShorterService } from '../services';
import { CreateShortedUrlResponseDto } from '../dto/response';

@Controller('url-shorter')
@UsePipes(new ValidationPipe({ transform: true }))
export class UrlShorterController {
  constructor(private urlShorterService: UrlShorterService) {}

  @Post()
  async getShortedUrl(
    @Body() request: CreateShortedUrlDto,
  ): Promise<CreateShortedUrlResponseDto> {
    return this.urlShorterService.createShortedUrl(request);
  }
}
