import { Module } from '@nestjs/common';
import { PhonesController } from './controllers/phones.controller';
import { PhonesService } from './services/phones.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService],
})
export class PhonesModule {}
