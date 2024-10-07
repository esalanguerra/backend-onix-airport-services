import { Module } from '@nestjs/common';
import { AirportServicesService } from './airport-services.service';
import { AirportServicesController } from './airport-services.controller';
import {
  AirportService,
  AirportServiceSchema,
} from './entities/airport-service.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AirportService.name, schema: AirportServiceSchema },
    ]),
  ],
  controllers: [AirportServicesController],
  providers: [AirportServicesService],
})
export class AirportServicesModule {}
