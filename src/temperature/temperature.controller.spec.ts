import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from './../core/mocks/mock.repository';
import { QueryDTO } from './dtos/query.dto';
import { EScale } from './enums/scale.enum';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';

describe('TemperatureController', () => {
  let controller: TemperatureController;

  const cacheManager = new MockRepository<typeof CACHE_MANAGER>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemperatureController],
      providers: [
        TemperatureService,
        {
          provide: CACHE_MANAGER,
          useValue: cacheManager,
        },
      ],
    }).compile();

    controller = module.get<TemperatureController>(TemperatureController);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', async () => {
    const query: QueryDTO = { scale: EScale.FAHRENHEIT, degrees: 78.8 };
    expect(await controller.convertTemp(query)).toEqual({
      scale: EScale.CELCIUS,
      degrees: 26,
    });
  });
});
