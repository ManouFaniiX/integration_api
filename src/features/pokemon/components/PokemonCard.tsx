import { PokemonListItem } from "../types/pokemon.types";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonCard({
  pokemon,
}: PokemonCardProps) {
  const id = pokemon.url.split("/")[6];

  return (
    <div className="rounded-xl border p-4 mt-5">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
        className="mx-auto"
      />

      <h2 className="text-center capitalize">
        {pokemon.name}
      </h2>

      <p className="text-center">
        #{id}
      </p>
    </div>
  );
}