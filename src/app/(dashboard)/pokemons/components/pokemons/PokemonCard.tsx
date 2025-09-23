import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../../interfaces";
import { ArrowRight, InfoIcon } from "lucide-react";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
  return (
    <article className="mx-auto mt-4 w-72 transition-transform duration-300 hover:scale-105">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Header con imagen del Pokémon */}
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                width={100}
                height={100}
                alt={`${pokemonName} - Pokémon #${pokemon.id}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                className="drop-shadow-lg transition-transform duration-300 hover:scale-110"
                priority={false}
              />
            </div>
          </div>
          
          {/* Información básica del Pokémon */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-white mb-1">
              {pokemonName}
            </h2>
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
          </div>
        </div>

        {/* Sección de acciones */}
        <div className="p-4 space-y-2">
          <Link href={`/pokemons/${pokemon.id}`} className="block w-full"
          >
            <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <InfoIcon className="text-blue-900" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  Consultar por ID
                </p>
                <p className="text-xs text-gray-500">
                  Información completa del Pokémon consultada por ID
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>
          </Link>
          <Link href={`/pokemons/${pokemon.name}`} className="block w-full"
          >
            <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <InfoIcon className="text-blue-900" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  Consultar por nombre
                </p>
                <p className="text-xs text-gray-500">
                  Información completa del Pokémon consultada por nombre
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};