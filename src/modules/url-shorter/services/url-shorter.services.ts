import { Injectable } from '@nestjs/common';
import { CreateShortedUrlDto } from '../dto/create-shorted-url.dto';
import ShortUniqueId from 'short-unique-id';
import { CreateShortedUrlResponseDto } from '../dto/response';

@Injectable()
export class UrlShorterService {
  private randomStrService: ShortUniqueId;

  constructor() {
    this.randomStrService = new ShortUniqueId({ length: 10 });
  }

  async createShortedUrl({
    url,
    slug,
  }: CreateShortedUrlDto): Promise<CreateShortedUrlResponseDto> {
    return new Promise(async (resolve) => {
      resolve({
        originalUrl: url,
        shortedUrl: slug ?? this.randomStrService.rnd(),
      });
    });
  }
}
