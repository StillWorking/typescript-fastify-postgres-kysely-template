import { FastifyInstance } from 'fastify'
import { getPokemon } from 'controllers/PokemonController'

async function pokemonRouter(fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: getPokemon
    })
}

export default pokemonRouter