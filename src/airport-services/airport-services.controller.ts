import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AirportServicesService } from './airport-services.service';
import { CreateAirportServiceDto } from './dto/create-airport-service.dto';
import { UpdateAirportServiceDto } from './dto/update-airport-service.dto';

@Controller('airport-services')
export class AirportServicesController {
  constructor(
    private readonly airportServicesService: AirportServicesService,
  ) {}

  @Post()
  create(@Body() createAirportServiceDto: CreateAirportServiceDto) {
    return this.airportServicesService.create(createAirportServiceDto);
  }

  @Get()
  findAll() {
    return this.airportServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportServicesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAirportServiceDto: UpdateAirportServiceDto,
  ) {
    return this.airportServicesService.update(id, updateAirportServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airportServicesService.remove(id);
  }
}
