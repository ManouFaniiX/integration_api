import { usePokemonStore } from "@/stores/pokemon.store";

export const usePokemons = () =>
  usePokemonStore((state) => state.pokemons);

export const useAddPokemon = () =>
  usePokemonStore((state) => state.addPokemon);
