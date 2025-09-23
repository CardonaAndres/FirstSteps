import type { Metadata } from 'next';
import { PokemonAPI } from './services';
import { PokemonGrid } from "./components";

export const metadata: Metadata = {
  title: 'Listado de Pokemons',
  description: 'Consulta todos los pokemons disponibles en nuestra plataforma',
};  

export default async function PokemonsPage() {
  const pokemons = await PokemonAPI.getPokemons(151);  

  return (
    <main className="flex flex-col">
      <span className="flex text-5xl my-4 justify-center"> Listado de Pokemons </span>

      <PokemonGrid pokemons={pokemons} />
    </main>
  );
}