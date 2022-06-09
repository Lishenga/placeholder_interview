import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadingBays } from './entities/LoadingBays';
import { MeetingRooms } from './entities/MeetingRooms';
import { Offices } from './entities/Offices';
import { Properties } from './entities/Properties';
import { Warehouses } from './entities/Warehouses';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Properties)
    private propertiesRepository: Repository<Properties>,
    @InjectRepository(Offices)
    private officesRepository: Repository<Offices>,
    @InjectRepository(Warehouses)
    private warehousesRepository: Repository<Warehouses>,
    @InjectRepository(LoadingBays)
    private loadingbaysRepository: Repository<LoadingBays>,
    @InjectRepository(MeetingRooms)
    private meetingroomsRepository: Repository<MeetingRooms>,
  ) {}

  // Retrieving a single property
  async getProperty(propertyId: number): Promise<Properties> {
    const property = await this.propertiesRepository.findOneBy({
      propertyId,
    });

    // If the ID provided doesn't match any ID in the DB for a property, an error is returned.
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    // Searching for a particular warehouse for the property if it exists
    const warehouse = await this.warehousesRepository.findOneBy({
      propertyId,
    });

    // Executing the logic for a found warehouse
    if (warehouse) {
      // Attaching the results of the warehouse found to the response of the property
      property.warehouses = warehouse;

      // Retrieving and appending the array results of loadingbays to the response of an office that's a property. The results of the loadingbays can an empty array
      property.warehouses.loadingBays = await this.loadingbaysRepository.find({
        where: { property: warehouse },
      });
      return property;
    }

    // Searching for a particular office for the property if it exists
    const office = await this.officesRepository.findOneBy({
      propertyId,
    });

    // Executing the logic for a found office
    if (office) {
      // Attaching the results of the office found to the response of the property
      property.offices = office;

      // Retrieving and appending the array results of meetingrooms to the response of an office that's a property. The results of the meetingrooms can an empty array
      property.offices.meetingRooms = await this.meetingroomsRepository.find({
        where: { property: office },
      });
      return property;
    }

    // throwing an en error incase a property without an office or warehouse as property has to have a warehouse or an office
    throw new NotFoundException('Property has no known warehouse or office');
  }
}
