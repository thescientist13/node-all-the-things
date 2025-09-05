import Fastify from 'fastify'

const app = Fastify({
  logger: true
})

// Declare a route
app.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

export { app };