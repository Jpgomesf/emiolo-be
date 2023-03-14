import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { email, name, photo } = createUserDto;
    return this.userService.createUser(email, name, photo);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}