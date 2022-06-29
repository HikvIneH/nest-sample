import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from '../mocks/mock.repository';
import { TransformInterceptor } from './transform.interceptor';

describe('TransformInterceptor', () => {
  let transform = new MockRepository<typeof TransformInterceptor>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: TransformInterceptor,
          useValue: transform,
        },
      ],
    }).compile();
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    const pipeTransform = new TransformInterceptor();

    const spyService = jest.spyOn(pipeTransform, 'intercept').mockReturnThis();
    const pipe = pipeTransform.intercept(
      transform.context,
      transform.callHandler,
    );
    expect(pipe).toBeDefined();
  });
});
