import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { NINJA_LEVEL } from './enums';

export class registerNinjaDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  father_name: string;

  @ApiProperty()
  nick_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  level: NINJA_LEVEL;

  @ApiProperty()
  is_active: boolean;
}

export class welcomeNinjasDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  father: string;
}
