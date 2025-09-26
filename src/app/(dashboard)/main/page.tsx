import { SimpleWidget } from "@/global/components";

export default function MainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text">
          ¡Bienvenido a mi PokeApp!
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Esta aplicación es mi proyecto de práctica mientras aprendo <strong>Next.js</strong>. 
          Aquí estoy aplicando todos los conceptos que voy dominando: desde componentes de servidor 
          y cliente, manejo de rutas dinámicas, integración con APIs externas como la PokéAPI, 
          hasta el manejo de estado y formularios. Es mi laboratorio personal donde experimento 
          con las mejores prácticas de React y Next.js, implementando features como navegación, 
          búsqueda de Pokémon, sistema de favoritos y mucho más. ¡Cada línea de código es un paso 
          más en mi viaje de aprendizaje! 🚀
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <p className="text-gray-700 text-base">
            💡 <strong>Objetivo:</strong> Poner en práctica todo lo aprendido sobre Next.js, 
            desde lo básico hasta funcionalidades avanzadas, mientras construyo algo divertido 
            y funcional con la temática de Pokémon.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap p-2 justify-center mt-15">
        <SimpleWidget description="Contador con Redux, implementando un estado global para practicar Redux." />
      </div>

    </main>
  );
}