import { notFound } from "next/navigation";
import { Pokemon, PokemonsResponse, SimplePokemon } from "../../interfaces";

export class PokemonAPI {
    static async getPokemons(limit = 60, offset = 0): Promise<SimplePokemon[]> {
        const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {})
        .then(res => res.json());
            
        const pokemons = data.results.map( pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }));


        return pokemons;
    }

    static async getPokemon(id: string): Promise<Pokemon>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cache: 'force-cache'
        });

        if (!res.ok) notFound(); 

        const pokemon: Pokemon = await res.json();
        
        return pokemon;
    }

}