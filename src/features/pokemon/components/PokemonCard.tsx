import type {
  CreatedPokemon,
  PokemonListItem,
} from "../types/pokemon.types";

interface PokemonCardProps {
  pokemon: PokemonListItem | CreatedPokemon;
}

export default function PokemonCard({
  pokemon,
}: PokemonCardProps) {
  const isCreatedPokemon = "type" in pokemon;
  const id = isCreatedPokemon ? null : pokemon.url.split("/")[6];
  const imageUrl = isCreatedPokemon
    ? "/images/pokemon.png"
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="rounded-xl border p-4 mt-5">
      <img
        src={imageUrl}
        alt={pokemon.name}
        className="mx-auto h-24 w-24 object-contain"
      />

      <h2 className="text-center capitalize">
        {pokemon.name}
      </h2>

      {isCreatedPokemon ? (
        <div className="text-center text-sm capitalize">
          <p>Type : {pokemon.type}</p>
          <p>Taille : {pokemon.height}</p>
          <p>Poids : {pokemon.weight}</p>
        </div>
      ) : (
        <p className="text-center">#{id}</p>
      )}
    </div>
  );
}
