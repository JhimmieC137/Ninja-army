import { ApiProperty } from '@nestjs/swagger';

export class PasswordResetDto {
  @ApiProperty()
  email: string;
}

export class SignInDto extends PasswordResetDto {
  @ApiProperty()
  password: string;
}

export class RegisterDto extends SignInDto {
  @ApiProperty()
  first_name: string = null;

  @ApiProperty()
  last_name: string = null;

  @ApiProperty()
  father_name: string = null;
}

export class ChangePasswordDto extends SignInDto {}

export class ConfirmEmailDto extends PasswordResetDto {}
