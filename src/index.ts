import fastify from 'fastify'
import pino from 'pino'
import pokemonRouter from 'router/PokemonRouter';

const port = 5000;

const startServer = async () => {
    try {
        const server = fastify({
            logger: pino({ level: 'info' }),
        })
        server.register(require('@fastify/cors'))
        server.register(require('@fastify/formbody'))
        server.register(require('@fastify/helmet'))
        server.register(require('@fastify/swagger'), {
            routePrefix: '/docs',
            exposeRoute: true,
            swagger: {
                info: {
                    title: 'Template API',
                    description: 'Building an API',
                    version: '1.0.0'
                },
                externalDocs: {
                    url: 'https://swagger.io',
                    description: 'Find more info here'
                },
                host: 'localhost:5000',
                schemes: [
                    'http',
                    'https'
                ],
                consumes: ['application/json'],
                produces: ['application/json'],
            }
        })
        server.register(pokemonRouter, { prefix: '/api/pokemon' })
        server.setErrorHandler((error, request, reply) => {
            server.log.error(error);
        })
        server.get('/', (request, reply) => {
            reply.send('Hello there')
        })
        if (process.env.NODE_ENV === 'production') {
            for (const signal of ['SIGINT', 'SIGTERM']) {
                process.on(signal, () =>
                    server.close().then((err) => {
                        console.log(`close application on ${signal}`)
                        process.exit(err ? 1 : 0)
                    }),
                )
            }
        }
        await server.listen({ port: port })
    } catch (e) {
        console.error(e)
    }
}

process.on('unhandledRejection', (e) => {
    console.error(e)
    process.exit(1)
})

startServer()