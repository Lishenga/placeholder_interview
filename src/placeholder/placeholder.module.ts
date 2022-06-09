import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadingBays } from './entities/LoadingBays';
import { MeetingRooms } from './entities/MeetingRooms';
import { Offices } from './entities/Offices';
import { Properties } from './entities/Properties';
import { Warehouses } from './entities/Warehouses';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      Properties,
      Warehouses,
      Offices,
      LoadingBays,
      MeetingRooms,
    ]),
  ],
  providers: [PropertiesService],
  controllers: [PropertiesController],
})
export class PlaceholderModule {}
