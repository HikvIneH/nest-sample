import { Injectable } from '@nestjs/common';
import { EScale } from './enums/scale.enum';
import { Temperature } from './interfaces/temperature.interface';

@Injectable()
export class TemperatureService {
  public async convert(scale: string, degrees: number): Promise<Temperature> {
    scale = scale.toLowerCase();
    if (scale === EScale.FAHRENHEIT) {
      const res = await this.convertFahrenheit2Celcius(degrees);
      return { scale: EScale.CELCIUS, degrees: res };
    } else if (scale === EScale.CELCIUS) {
      const res = await this.convertCelcius2Fahrenheit(degrees);
      return { scale: EScale.FAHRENHEIT, degrees: res };
    }
  }

  public async convertFahrenheit2Celcius(degrees: number): Promise<number> {
    return Number((((degrees - 32) * 5) / 9).toFixed(3));
  }

  public async convertCelcius2Fahrenheit(degrees: number): Promise<number> {
    return Number(((degrees * 9) / 5 + 32).toFixed(3));
  }
}
