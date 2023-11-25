import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import {
  ChangePasswordDto,
  PasswordResetDto,
  RegisterDto,
  SignInDto,
} from '../dtos/authRequests.dto';
import { CustomListResDto, CustomResDto } from 'src/helpers/schemas.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private customListRes: CustomListResDto,
    private customRes: CustomResDto,
  ) {}

  @Post('/reigister')
  async createNinja(@Body() registerNinjaDto: RegisterDto) {
    const newNinja = await this.authService.registerNinja(registerNinjaDto);
    const response = this.customRes;
    response.results = { ...newNinja };
    response.message = `Welcome ${newNinja.first_name} of the ${newNinja.last_name} clan`;
    return response;
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
