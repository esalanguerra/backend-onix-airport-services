import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class AirportService {
  @Prop()
  name: string;

  @Prop()
  price: string;
}

export type AirportServiceDocument = HydratedDocument<AirportService>;

export const AirportServiceSchema =
  SchemaFactory.createForClass(AirportService);
