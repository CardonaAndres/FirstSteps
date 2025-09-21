import { PokemonAPI } from './services';
import { PokemonGrid } from "./components";

export default async function PokemonsPage() {
  const pokemons = await PokemonAPI.getPokemons(151);  

  return (
    <main className="flex flex-col">
      <span className="flex text-5xl my-4 justify-center"> Listado de Pokemons </span>

      <PokemonGrid pokemons={pokemons} />
    </main>
  );
}