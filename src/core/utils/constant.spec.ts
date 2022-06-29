import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from '../mocks/mock.repository';
import { checkCacheStatus, setCacheStatus } from './constant';

describe('Cache Constant', () => {
  it('Should return true', () => {
    setCacheStatus(true);
    expect(checkCacheStatus).toBeTruthy;
  });
});
