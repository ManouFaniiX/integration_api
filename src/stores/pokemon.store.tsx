import { create } from "zustand";
import type { CreatedPokemon } from "@/features/pokemon/types/pokemon.types";

interface PokemonStore {
  pokemons: CreatedPokemon[];
  addPokemon: (pokemon: CreatedPokemon) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],

  addPokemon: (pokemon) =>
    set((state) => ({
      pokemons: [...state.pokemons, pokemon],
    })),
}));
