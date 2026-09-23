import type {
  CreatedPokemon,
  PokemonListResponse,
} from "../types/pokemon.types";

interface CreatePokemonResponse {
  message: string;
  pokemon: CreatedPokemon;
}

const API_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(): Promise<PokemonListResponse> {
  const response = await fetch(
    `${API_URL}/pokemon?limit=20`
  );

  if (!response.ok) {
    throw new Error("Impossible de récupérer les Pokémon");
  }

  return response.json();
}

export async function createPokemon(
  pokemon: CreatedPokemon
): Promise<CreatePokemonResponse> {
  const response = await fetch("/api/pokemons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la création");
  }

  return response.json();
}
