import { UseInterceptors, applyDecorators, CacheKey } from '@nestjs/common';
import { HttpCacheInterceptor } from '../interceptors/httpCache.interceptor';
import { checkCacheStatus } from '../utils/constant';

export function ImplementCache() {
  if (checkCacheStatus()) {
    return applyDecorators(
      UseInterceptors(HttpCacheInterceptor),
      CacheKey('ID'),
    );
  } else {
    return applyDecorators();
  }
}
