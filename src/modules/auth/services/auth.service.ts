import { Injectable, Body, HttpException, HttpStatus } from '@nestjs/common';
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

  async registerNinja(@Body() registerDto: RegisterDto): Promise<Ninja> {
    if (
      await this.ninjaRepository.findOne({
        where: {
          email: registerDto.email,
        },
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Ninja with email already exists in the shinobi world!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: 'Email vallidation',
        },
      );
    } else if (
      await this.ninjaRepository.findOne({
        where: {
          nick_name: registerDto.nick_name,
        },
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'A shinobi must have a unique nick name to be rembered by!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: 'Email vallidation',
        },
      );
    } else {
      const ninjaObj = await this.ninjaRepository.create(registerDto);
      const newNinja = await this.ninjaRepository.save(ninjaObj);
      return newNinja;
    }
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
