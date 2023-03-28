import { PokemonModel } from "../db/tableModels/PokemonModel"
import { FastifyReply, FastifyRequest } from "fastify"
import { STANDARD } from "../helpers/Constants"
import { handleServerError } from "../helpers/Errors"

export const getPokemon = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const data = await PokemonModel.findAll()
        return res.status(STANDARD.SUCCESS).send({data: data})
    } catch (error) {
        console.log(error)
        handleServerError(res, error)
    }
}