import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from '../mocks/mock.repository';
import { setCacheStatus } from '../utils/constant';
import { HttpCacheInterceptor } from './httpCache.interceptor';

describe('TransformInterceptor', () => {
  const cacheManager = new MockRepository<typeof CACHE_MANAGER>();

  const interceptor = new MockRepository<typeof HttpCacheInterceptor>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CACHE_MANAGER,
          useValue: cacheManager,
        },
        {
          provide: HttpCacheInterceptor,
          useValue: interceptor,
        },
      ],
    }).compile();
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(interceptor.reflector.get).toBeDefined();
    jest.spyOn(interceptor, 'checkCacheStatus').mockReturnValue(true);

    const intercept = new HttpCacheInterceptor(
      cacheManager.metadata,
      interceptor.reflector,
    );

    expect(intercept.trackBy(interceptor.context)).toBeDefined();
  });
});
