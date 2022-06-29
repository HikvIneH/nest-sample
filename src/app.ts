import { NestFactory } from '@nestjs/core';
import { moduleFactory } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as fastify from 'fastify';
import compression from 'fastify-compress';

export async function bootstrap(): Promise<fastify.FastifyInstance> {
  const instance: fastify.FastifyInstance = fastify.fastify();
  const fastifyAdapter = new FastifyAdapter(instance);

  await fastifyAdapter.register(compression, {
    encodings: ['gzip', 'deflate'],
    // threshold: 0, // encoding poc, should be changed to default 1024
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    moduleFactory(),
    fastifyAdapter,
  );

  await app.init();
  return instance;
}
