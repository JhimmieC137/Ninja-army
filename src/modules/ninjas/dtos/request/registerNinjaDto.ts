// import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class registerNinjaDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  nick_name: string;

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
