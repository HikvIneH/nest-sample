import { Controller, Get, Query } from '@nestjs/common';
import { ImplementCache } from './../core/decorators/cache.decorator';
import { QueryDTO } from './dtos/query.dto';
import { Temperature } from './interfaces/temperature.interface';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly service: TemperatureService) {}

  @ImplementCache()
  @Get('convert')
  async convertTemp(@Query() query: QueryDTO): Promise<Temperature> {
    return this.service.convert(query.scale, query.degrees);
  }
}
