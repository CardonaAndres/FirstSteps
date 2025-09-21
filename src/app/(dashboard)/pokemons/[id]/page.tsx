import Image from "next/image";
import type { Metadata } from "next";
import { PokemonAPI } from "../services";

interface Props {
  params: Promise<{ id: string }>; 
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const pokemon = await PokemonAPI.getPokemon(id);
      
    return {
      title: `#${pokemon.id.toString().padStart(3, '0')} - ${pokemon.name}`,
      description: `Información completa del Pokémon ${pokemon.name} - Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}`,
    };

  } catch (err) {

    return {
      title: 'Pokémon no encontrado',
      description: 'El Pokémon solicitado no existe'
    };

  }
}

export default async function PokemonPage({ params }: Props) { 
  const { id } = await params;
  const pokemon = await PokemonAPI.getPokemon(id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white capitalize flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-lg font-medium">
                #{pokemon.id.toString().padStart(3, '0')}
              </span>
              {pokemon.name}
            </h1>
          </div>
          
          <div className="p-8 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                width={200}
                height={200}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Types */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Types
            </h3>
            <div className="flex gap-2">
              {pokemon.types.map(type => (
                <span 
                  key={type.slot} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium capitalize shadow-lg"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Weight */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Peso
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">
                {(pokemon.weight / 10).toFixed(1)}
              </span>
              <span className="text-slate-500 font-medium">kg</span>
            </div>
          </div>

          {/* Height */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Altura
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">
                {(pokemon.height / 10).toFixed(1)}
              </span>
              <span className="text-slate-500 font-medium">m</span>
            </div>
          </div>

          {/* Base Experience */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Experiencia Base
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">
                {pokemon.base_experience}
              </span>
              <span className="text-slate-500 font-medium">XP</span>
            </div>
          </div>
        </div>

        {/* Sprites Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Regular Sprites */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center">
              Sprites Regulares
            </h3>
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <Image
                  src={pokemon.sprites.front_default}
                  width={120}
                  height={120}
                  alt={`sprite frontal ${pokemon.name}`}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <p className="text-xs text-slate-500 mt-2">Frontal</p>
              </div>
              <div className="text-center">
                <Image
                  src={pokemon.sprites.back_default}
                  width={120}
                  height={120}
                  alt={`sprite trasero ${pokemon.name}`}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <p className="text-xs text-slate-500 mt-2">Trasero</p>
              </div>
            </div>
          </div>

          {/* Shiny Sprites */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center">
              Sprites Shiny
            </h3>
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-lg blur-sm"></div>
                  <Image
                    src={pokemon.sprites.front_shiny}
                    width={120}
                    height={120}
                    alt={`sprite shiny frontal ${pokemon.name}`}
                    className="relative z-10 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Frontal</p>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-lg blur-sm"></div>
                  <Image
                    src={pokemon.sprites.back_shiny}
                    width={120}
                    height={120}
                    alt={`sprite shiny trasero ${pokemon.name}`}
                    className="relative z-10 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Trasero</p>
              </div>
            </div>
          </div>
        </div>

        {/* Moves Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Movimientos ({pokemon.moves.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
            {pokemon.moves.slice(0, 20).map((move, index) => (
              <span 
                key={move.move.name} 
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm capitalize transition-colors duration-200 cursor-default"
              >
                {move.move.name.replace('-', ' ')}
              </span>
            ))}
            {pokemon.moves.length > 20 && (
              <span className="px-3 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm text-center">
                +{pokemon.moves.length - 20} más
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}