import { Store } from 'cache-manager';
import Redis from 'redis';

export interface RedisCache extends Cache {
  store: RedisStore;
}

export interface RedisStore extends Store {
  name: 'redis';
  getClient: () => Redis.RedisClientType;
  isCacheableValue: (value: any) => boolean;
  quit: () => Redis.quit;
}
