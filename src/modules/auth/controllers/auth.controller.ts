import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import {
  ChangePasswordDto,
  PasswordResetDto,
  RegisterDto,
  SignInDto,
} from '../dtos/authRequests.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/reigister')
  createNinja(@Body() registerNinjaDto: RegisterDto) {
    this.authService.registerNinja(registerNinjaDto);
  }

  @Post('/sign-in')
  logInNinja(@Body() signInNinjaDto: SignInDto) {
    this.authService.signInNinja(signInNinjaDto);
  }

  @Post('/request-password-reset')
  passwordReset(@Body() passwordResetDto: PasswordResetDto) {
    this.authService.requestPasswordReset(passwordResetDto);
  }

  @Post('/change-password')
  changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    this.authService.passwordReset(changePasswordDto);
  }

  @Post('/confirm-email')
  verifyEmail(@Body() changePasswordDto: ChangePasswordDto) {
    this.authService.passwordReset(changePasswordDto);
  }
}
