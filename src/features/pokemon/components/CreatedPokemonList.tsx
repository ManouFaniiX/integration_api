"use client";

import { useState } from "react";

import { usePokemons } from "@/features/pokemon/hooks/usePokemon";
import type { PokemonListItem } from "@/features/pokemon/types/pokemon.types";
import PokemonCard from "./PokemonCard";

interface CreatedPokemonListProps {
  initialPokemons: PokemonListItem[];
}

export default function CreatedPokemonList({
  initialPokemons,
}: CreatedPokemonListProps) {
  const createdPokemons = usePokemons();
  const [search, setSearch] = useState("");

  const allPokemons = [...initialPokemons, ...createdPokemons];
  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <div className="mb-6 max-w-md">
        <label htmlFor="pokemon-search" className="mb-2 block font-medium">
          Rechercher un Pokémon
        </label>
        <input
          id="pokemon-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ex: Pikachu"
          className="w-full rounded-md border p-2"
        />
      </div>

      {filteredPokemons.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={"id" in pokemon ? pokemon.id : pokemon.name}
              pokemon={pokemon}
            />
          ))}
        </div>
      ) : (
        <p>Aucun Pokémon trouvé.</p>
      )}
    </>
  );
}
