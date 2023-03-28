import { PokemonModel } from '../../db/tableModels/PokemonModel';
import pokedex from './data/pokedex.json'

async function seed() {
    pokedex.forEach((p) => {
        const { id, name, type, base } = p;
        const primaryType = type[0]
        const subtype = type.length > 1 ? type[1] : ''
        const pokemon = {
            id: id,
            name: name.english,
            type: primaryType,
            subtype: subtype,
            hp: base.HP,
            attack: base.Attack,
            defense: base.Defense,
            sp_attack: base['Sp. Attack'],
            sp_defense: base['Sp. Defense'],
            speed: base.Speed,
        };
        PokemonModel.create(pokemon)
    })
}

seed();