import { Module, ValidationPipe } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { TemperatureModule } from './temperature/temperature.module';

export function moduleFactory(): any {
  @Module({
    imports: [TemperatureModule, CoreModule],
  })
  class AppModule {}

  return AppModule;
}
