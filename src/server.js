// Import the framework and instantiate it
import Fastify from 'fastify';

// Importação das rotas
import usersRoutes from './routes/users.routes.js';

import Cors from '@fastify/cors';



const fastify = Fastify({
    logger: true
})
fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
});

fastify.register(usersRoutes, {
    prefix: "/users"
})

// Declare a route
fastify.get('/', async function handler(request, reply) {
    return "server is running at port 3000";
})

// Run the server!
try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}