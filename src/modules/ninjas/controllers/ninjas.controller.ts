import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  // ParseIntPipe,
} from '@nestjs/common';
import { NinjasService } from '../services/ninjas.service';
import { welcomeNinjasDto } from '../dtos/registerNinjaDto';
import {
  CustomInfoResDto,
  CustomListResDto,
} from '../../../helpers/schemas.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ninjas')
@Controller('ninjas')
export class NinjasController {
  constructor(
    private readonly ninjaService: NinjasService,
    private readonly customInfoResDto: CustomInfoResDto,
    private readonly customListResDto: CustomListResDto,
  ) {}

  @Get()
  async getNinjas(): Promise<CustomListResDto> {
    const response = this.customListResDto;
    response.results = await this.ninjaService.findAll();
    response.count = (await this.ninjaService.findAll()).length;
    return response;
  }
  @Post()
  getGreeting(@Body() welcomeData: welcomeNinjasDto): CustomInfoResDto {
    const greeting = this.customInfoResDto;
    greeting.info = this.ninjaService.greetNinja(
      welcomeData.name,
      welcomeData.father,
    );

    return greeting;
  }

  @Delete('/:id')
  async killNinja(@Param('id') id: string): Promise<CustomInfoResDto> {
    await this.ninjaService.delete(id);
    const response = this.customInfoResDto;
    response.info = 'Deleted Successfully';
    return response;
  }
}

@ApiTags('weapons')
@Controller('weapons')
export class NinjaWeaponsController {
  @Get()
  getWeapons() {
    return 'Get you weapons here';
  }
}
