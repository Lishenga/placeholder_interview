import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Properties } from './entities/properties';
import { PropertiesService } from './properties.service';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get('property')
  @ApiCreatedResponse({ description: 'Property retrieved successfully.' })
  async getProperty(
    @Query('id', ParseIntPipe) propertyId: number,
  ): Promise<Properties> {
    return this.propertiesService.getProperty(propertyId);
  }
}
