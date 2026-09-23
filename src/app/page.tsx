import Hero from "@/features/components/Hero";
import PokemonCreateButton from "@/features/pokemon/components/PokemonCreateButton";
import PokemonCard from "@/features/pokemon/components/PokemonCard";
import { getPokemons } from "@/features/pokemon/services/pokemon.service";

export default async function Home() {
  const data = await getPokemons();

  return (
    <main className="p-8">
      <Hero />

      <PokemonCreateButton />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {data.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
          />
        ))}
      </div>
    </main>
  );
}