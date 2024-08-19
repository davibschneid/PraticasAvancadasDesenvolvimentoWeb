import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
