import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  NinjasController,
  NinjaWeaponsController,
} from './controllers/ninjas.controller';
import { NinjasService } from './services/ninjas.service';
import {
  CustomInfoResDto,
  CustomListResDto,
} from './dtos/response/customResposeDto';
import { Ninja } from './entities/ninja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ninja])],
  controllers: [NinjasController, NinjaWeaponsController],
  providers: [NinjasService, CustomInfoResDto, CustomListResDto],
})
export class NinjasModule {}
