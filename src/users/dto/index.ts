import { ApiProperty } from '@nestjs/swagger';

export class GetUserParamDto {
  @ApiProperty({ description: 'ID Users' })
  id: number;
}

export class GetUserResDto {
  @ApiProperty({ description: 'ID Users' })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  pass: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  email: string;
}
