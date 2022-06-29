import { Injectable, CacheInterceptor, ExecutionContext } from '@nestjs/common';
import { CACHE_KEY_METADATA } from '@nestjs/common/cache/cache.constants';
import { checkCacheStatus } from '../utils/constant';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    if (checkCacheStatus()) {
      const cacheKey = this.reflector.get(
        CACHE_KEY_METADATA,
        context.getHandler(),
      );

      if (cacheKey) {
        const request = context.switchToHttp().getRequest();
        let path = request?.url;
        path = path?.replace(/\//g, '_');
        return `${cacheKey}${path}`;
      }
      return super.trackBy(context);
    }
  }
}
