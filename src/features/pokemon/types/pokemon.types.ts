export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface CreatedPokemon {
  id: string;
  name: string;
  type: string;
  height: number;
  weight: number;
}
