import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadingBays } from './placeholder/entities/LoadingBays';
import { MeetingRooms } from './placeholder/entities/MeetingRooms';
import { Offices } from './placeholder/entities/Offices';
import { Properties } from './placeholder/entities/Properties';
import { Warehouses } from './placeholder/entities/Warehouses';
import { PropertiesController } from './placeholder/properties.controller';
import { PropertiesService } from './placeholder/properties.service';

describe('PropertiesController', () => {
  let propertiesController: PropertiesController;
  let propertiesService: PropertiesService;
  let propertiesRepository: Repository<Properties>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        PropertiesService,
        {
          provide: getRepositoryToken(Properties),
          useExisting: true,
          useValue: {
            findOneBy: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(MeetingRooms),
          useExisting: true,
          useValue: {
            find: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Offices),
          useExisting: true,
          useValue: {
            findOneBy: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Warehouses),
          useExisting: true,
          useValue: {
            findOneBy: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(LoadingBays),
          useExisting: true,
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    propertiesService = moduleRef.get<PropertiesService>(PropertiesService);
    propertiesController =
      moduleRef.get<PropertiesController>(PropertiesController);
    propertiesRepository = moduleRef.get<Repository<Properties>>(
      getRepositoryToken(Properties),
    );
  });

  describe('getProperty', () => {
    it('should return an array of properties', async () => {
      jest.spyOn(propertiesService, 'getProperty').mockImplementation();
      expect(await propertiesController.getProperty(9));
    });
    it('propertiesRepository should be defined', () => {
      expect(propertiesRepository).toBeDefined();
    });
  });
});
