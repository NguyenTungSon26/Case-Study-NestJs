import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity | undefined> {
    return this.userService.findById(id);
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
  //   const { name, email } = createUserDto;
  //   return this.userService.createUser(name, email);
  // }
}
