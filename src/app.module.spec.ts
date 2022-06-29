import { Test } from '@nestjs/testing';
import { moduleFactory } from './app.module';
import { CoreModule } from './core/core.module';
import { HttpCacheInterceptor } from './core/interceptors/httpCache.interceptor';
import { TemperatureController } from './temperature/temperature.controller';
import { TemperatureModule } from './temperature/temperature.module';
import { TemperatureService } from './temperature/temperature.service';

describe('Test module', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [moduleFactory()],
    })
      .overrideInterceptor(HttpCacheInterceptor)
      .useClass(HttpCacheInterceptor)
      .compile();

    expect(module).toBeDefined();
    expect(module.get(TemperatureModule)).toBeInstanceOf(TemperatureModule);
    expect(module.get(TemperatureController)).toBeInstanceOf(
      TemperatureController,
    );
    expect(module.get(TemperatureService)).toBeInstanceOf(TemperatureService);
    expect(module.get(CoreModule)).toBeInstanceOf(CoreModule);
  });
});
