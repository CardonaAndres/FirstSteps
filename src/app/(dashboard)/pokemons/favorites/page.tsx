import type { Metadata } from 'next';
import { PokemonGrid } from '../components';

export const metadata: Metadata = {
  title: 'Mis Pokemons Favoritos',
  description: 'Consulta todos tus pokemons favoritos en nuestra plataforma',
};  

export default async function FavoritesPokemonPage() {

  return (
    <main className="flex flex-col">
      <span className="flex text-5xl my-4 justify-center"> Mis Pokemons Favoritos </span>

      <PokemonGrid pokemons={[]} />
    </main>
  );
}
