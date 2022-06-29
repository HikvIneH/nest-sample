import { bootstrap as fastify } from './app';
import compression from 'fastify-compress';

async function startFastify() {
  const fastifyInstance = await fastify();
  fastifyInstance.listen(3000);
}

startFastify();
