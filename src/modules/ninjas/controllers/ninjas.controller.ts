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
import { registerNinjaDto, welcomeNinjasDto } from '../dtos/registerNinjaDto';
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

  @Post('/sign-up')
  async createNinja(
    @Body() registerNinja: registerNinjaDto,
  ): Promise<CustomListResDto> {
    const ninja = await this.ninjaService.create(registerNinja);
    const response = await this.customListResDto;
    response.results = ninja;
    return response;
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
