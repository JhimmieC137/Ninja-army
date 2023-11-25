import { Injectable, Body } from '@nestjs/common';
import {
  ChangePasswordDto,
  ConfirmEmailDto,
  PasswordResetDto,
  RegisterDto,
  SignInDto,
} from '../dtos/authRequests.dto';
import { Repository } from 'typeorm';
import { Ninja } from 'src/modules/ninjas/entities/ninja.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Ninja)
    private ninjaRepository: Repository<Ninja>,
  ) {}

  registerNinja(@Body() registerDto: RegisterDto) {
    this.ninjaRepository.create(registerDto);
  }

  signInNinja(@Body() signInDto: SignInDto) {
    return signInDto;
  }

  signOutNinja() {
    return 'Signed out!';
  }

  requestPasswordReset(@Body() passwordReset: PasswordResetDto) {
    return passwordReset;
  }

  passwordReset(@Body() changePasswordDto: ChangePasswordDto) {
    return changePasswordDto;
  }

  confirmEmail(@Body() confirmEmail: ConfirmEmailDto) {
    return confirmEmail;
  }
}
