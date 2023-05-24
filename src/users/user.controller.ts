import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiTags, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetUserParamDto, GetUserResDto } from './dto';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOkResponse({
    type: GetUserResDto,
    description: 'Lấy thông tin người dùng thành công',
  })
  @ApiNotFoundResponse({ description: 'Không tìm thấy người dùng' })
  async getUserById(
    @Param() params: GetUserParamDto,
  ): Promise<GetUserResDto | undefined> {
    return this.userService.findById(params.id);
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
  //   const { name, email } = createUserDto;
  //   return this.userService.createUser(name, email);
  // }
}
