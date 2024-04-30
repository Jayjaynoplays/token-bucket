import { Module } from '@nestjs/common';
import { UserControllers } from './controllers';
import { UserService } from './services';

@Module({
  controllers: [UserControllers],
  providers: [UserService],
})
export class UserModule {}
