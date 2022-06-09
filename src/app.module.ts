import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: 3306,
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Properties, Warehouses, Offices, LoadingBays, MeetingRooms],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PlaceholderModule,
  ],
})
export class AppModule {}
