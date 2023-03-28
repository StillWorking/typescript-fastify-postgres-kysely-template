import { z } from "zod";

const PokemonType = z.enum([
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
]);

export const PokemonSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    type: PokemonType,
    subtype: z.string().optional(),
    hp: z.number().max(255),
    attack: z.number().max(255),
    defense: z.number().max(255),
    sp_attack: z.number().max(255),
    sp_defense: z.number().max(255),
    speed: z.number().max(255),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
