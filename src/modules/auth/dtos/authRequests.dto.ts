import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class PasswordResetDto {
  @ApiProperty()
  @IsEmail(
    {},
    {
      message: 'Valid email address required!',
    },
  )
  email: string;
}

export class SignInDto extends PasswordResetDto {
  @ApiProperty()
  @IsString()
  password: string;
}

export class RegisterDto extends SignInDto {
  @ApiProperty()
  @IsString()
  first_name: string = null;

  @ApiProperty()
  @IsString()
  last_name: string = null;

  @ApiProperty()
  nick_name: string = null;
}

export class ChangePasswordDto extends SignInDto {}

export class ConfirmEmailDto extends PasswordResetDto {}
