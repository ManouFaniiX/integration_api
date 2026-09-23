import { create } from "zustand";

interface Pokemon {
  id: string;
  name: string;
  type: string;
  height: number;
  weight: number;
}

interface PokemonStore {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],

  addPokemon: (pokemon) =>
    set((state) => ({
      pokemons: [...state.pokemons, pokemon],
    })),
}));