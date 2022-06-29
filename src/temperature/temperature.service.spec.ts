import { Test, TestingModule } from '@nestjs/testing';
import { EScale } from './enums/scale.enum';
import { TemperatureService } from './temperature.service';

describe('TemperatureService', () => {
  let service: TemperatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureService],
    }).compile();

    service = module.get<TemperatureService>(TemperatureService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be convert celcius to fahrenheit', async () => {
    expect(await service.convertCelcius2Fahrenheit(26)).toEqual(78.8);
  });

  it('should be convert fahrenheit to celcius', async () => {
    expect(await service.convertFahrenheit2Celcius(78.8)).toEqual(26);
  });

  it('should be fixed for 3 decimal places', async () => {
    expect(await service.convertFahrenheit2Celcius(10000)).toEqual(5537.778);
    expect(await service.convertCelcius2Fahrenheit(24)).toEqual(75.2);
  });

  it('should convert celcius and fahrenheit back and forth', async (celcius = 26, fahrenheit = 78.8) => {
    const fahrenheit2Celcius = await service.convertFahrenheit2Celcius(
      fahrenheit,
    );
    const celcius2Fahrenheit = await service.convertCelcius2Fahrenheit(celcius);

    const convertionResultFromFahrenheit = await service.convert(
      EScale.FAHRENHEIT,
      celcius2Fahrenheit,
    );
    const convertionResultFromCelcius = await service.convert(
      EScale.CELCIUS,
      fahrenheit2Celcius,
    );

    expect(
      await service.convert(EScale.CELCIUS, fahrenheit2Celcius),
    ).toMatchObject(convertionResultFromCelcius);

    expect(
      await service.convert(EScale.FAHRENHEIT, celcius2Fahrenheit),
    ).toMatchObject(convertionResultFromFahrenheit);
  });
});
