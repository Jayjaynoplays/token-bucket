import { UrlShorterService } from 'src/modules/url-shorter/services';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private urlShorterService: UrlShorterService) {}

  getUsers() {
    return this.urlShorterService.getUrl();
  }
}
