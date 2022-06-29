import { CacheModule, CACHE_MANAGER, Inject, Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
import * as redisStore from 'cache-manager-redis-store';

import * as dotenv from 'dotenv';
import { checkCacheStatus, setCacheStatus } from './../core/utils/constant';
import { RedisCache } from './interfaces/redis.interface';

const { parsed } = dotenv.config({
  path: `${process.cwd()}/.env`,
});
process.env = { ...parsed, ...process.env };

const cacheConfig = Object.create({});
cacheConfig.ttl = 3600;

if (process.env.CACHE_STORE === 'REDIS') {
  cacheConfig.store = redisStore;
  cacheConfig.url = process.env.REDIS_URL;
}

@Module({
  imports: [CacheModule.register(cacheConfig)],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {
  constructor(@Inject(CACHE_MANAGER) cacheManager: RedisCache) {
    if (process.env.CACHE_STORE === 'REDIS') {
      const client = cacheManager.store.getClient();
      /* istanbul ignore next */
      if (checkCacheStatus()) {
        console.info('Cache is active');

        client.on('connect', () => {
          setCacheStatus(true);
        });

        client.on('error', () => {
          console.warn("Can't connect to redis server");
          console.warn('Disabling cache');
          setCacheStatus(false);
          client.quit();
        });
      } else {
        console.info('Cache is not active');
      }
    }
  }
}
