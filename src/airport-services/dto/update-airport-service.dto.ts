import { PartialType } from '@nestjs/mapped-types';
import { CreateAirportServiceDto } from './create-airport-service.dto';

export class UpdateAirportServiceDto extends PartialType(
  CreateAirportServiceDto,
) {}
