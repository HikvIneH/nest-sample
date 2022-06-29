import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { moduleFactory } from '../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [moduleFactory()],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it('/temperature/convert', async (scale = 'fahrenheit', degrees = 78.8) => {
    return request(app.getHttpServer())
      .get(`/temperature/convert?scale=${scale}&degrees=${degrees}`)
      .expect(200)
      .expect({ data: { scale: 'celcius', degrees: 26 } });
  });
});
