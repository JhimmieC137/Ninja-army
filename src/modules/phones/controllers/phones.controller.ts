import { Controller, Get } from '@nestjs/common';

@Controller('phones')
export class PhonesController {
  @Get()
  getHome() {
    return 'Get your new ninja phnes here';
  }
}
