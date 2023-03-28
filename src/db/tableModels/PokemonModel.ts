import { db } from "db/Database";
import { Pokemon, PokemonSchema } from "db/schema/PokemonSchema";

export class PokemonModel {
    static async findById(id: number) {
        const result = await db
            .selectFrom('pokemon')
            .selectAll()
            .where('id', '=', id)
            .execute()
        return result[0] as Pokemon
    }

    static async delete(id: number) {
        await db.deleteFrom("pokemon").where("id", "=", id).executeTakeFirstOrThrow();
    }

    static async findAll() {
        const result = await db.selectFrom("pokemon").selectAll().execute();
        return result as Pokemon[];
    }

    static async update(id: number, name: string) {
        await db
            .updateTable("pokemon")
            .set({ name })
            .where("id", "=", id)
            .execute();
    }

    static async create(values: object) {
        let pokemon = PokemonSchema.parse(values)
        await db
            .insertInto("pokemon")
            .values(pokemon)
            .returningAll()
            .executeTakeFirstOrThrow();
    }
}