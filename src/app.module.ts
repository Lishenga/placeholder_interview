import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadingBays } from './placeholder/entities/LoadingBays';
import { MeetingRooms } from './placeholder/entities/MeetingRooms';
import { Offices } from './placeholder/entities/Offices';
import { Properties } from './placeholder/entities/Properties';
import { Warehouses } from './placeholder/entities/Warehouses';
import { PlaceholderModule } from './placeholder/placeholder.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '46.101.124.245',
      port: 3306,
      username: 'admin',
      password: 'P1r1chon1.',
      database: 'test_placeholder',
      entities: [Properties, Warehouses, Offices, LoadingBays, MeetingRooms],
      synchronize: true,
    }),
    PlaceholderModule,
  ],
})
export class AppModule {}
