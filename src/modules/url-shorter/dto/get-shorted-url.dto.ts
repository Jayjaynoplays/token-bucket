import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class GetShortedUrl {
  @IsNotEmpty()
  @IsString()
  @IsUrl(undefined, { message: 'URL is not valid.' })
  url!: string;

  @Optional()
  slug?: string;
}
