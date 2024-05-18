import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateShortedUrlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl(undefined, { message: 'URL is not valid.' })
  url!: string;

  @Optional()
  slug?: string;
}
