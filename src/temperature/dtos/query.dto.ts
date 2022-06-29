import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { EScale } from '../enums/scale.enum';

export class QueryDTO {
  @Transform(({ value }) => value.toLowerCase())
  @IsEnum(EScale, { message: 'Scale only accepts celcius or fahrenheit' })
  scale: EScale;

  @Transform(({ value }) => {
    if (value) {
      return Number(value);
    }
  })
  @IsNumber()
  degrees: number;
}
