import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ninja } from '../ninjas/entities/ninja.entity';
import { CustomListResDto, CustomResDto } from 'src/helpers/schemas.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Ninja])],
  controllers: [AuthController],
  providers: [AuthService, CustomListResDto, CustomResDto],
})
export class AuthModule {}
