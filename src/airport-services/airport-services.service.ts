import { Injectable } from '@nestjs/common';
import { CreateAirportServiceDto } from './dto/create-airport-service.dto';
import { UpdateAirportServiceDto } from './dto/update-airport-service.dto';
import { AirportService } from './entities/airport-service.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AirportServicesService {
  constructor(
    @InjectModel(AirportService.name)
    private readonly airportServiceModel: Model<AirportService>,
  ) {}

  async create(createAirportServiceDto: CreateAirportServiceDto) {
    return await this.airportServiceModel.create(createAirportServiceDto);
  }

  async findAll() {
    return await this.airportServiceModel.find();
  }

  async findOne(id: string) {
    return await this.airportServiceModel.findById(id)
  }

  async update(id: string, updateAirportServiceDto: UpdateAirportServiceDto) {
    return await this.airportServiceModel.findByIdAndUpdate(
      id,
      updateAirportServiceDto
    );
  }

  async remove(id: string) {
    return await this.airportServiceModel.findByIdAndDelete(id);
  }
}
