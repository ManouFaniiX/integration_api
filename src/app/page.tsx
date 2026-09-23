import Hero from "@/components/Hero";
import CreatedPokemonList from "@/features/pokemon/components/CreatedPokemonList";
import PokemonCreateButton from "@/features/pokemon/components/PokemonCreateButton";
import { getPokemons } from "@/features/pokemon/services/pokemon.service";

export default async function Home() {
  const data = await getPokemons();
  return (
    <main className="p-8">
      <Hero />
      <PokemonCreateButton />
      <CreatedPokemonList initialPokemons={data.results} />
    </main>
  );
}
