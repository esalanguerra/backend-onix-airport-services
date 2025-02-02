import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AirportServicesModule } from './airport-services/airport-services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AirportServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
