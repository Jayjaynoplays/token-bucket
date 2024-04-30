import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services';

@Controller('user')
export class UserControllers {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }
}
