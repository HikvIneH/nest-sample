import { ImplementCache } from './cache.decorator';

describe('TransformInterceptor', () => {
  it('should be defined', () => {
    process.env.ENABLE_CACHE = '0';
    expect(ImplementCache()).toBeDefined();
  });
});
