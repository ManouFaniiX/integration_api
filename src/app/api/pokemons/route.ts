import { NextResponse } from "next/server";
import type { CreatedPokemon } from "@/features/pokemon/types/pokemon.types";

export async function POST(request: Request) {
  const pokemon = (await request.json()) as Partial<CreatedPokemon>;

  if (
    !pokemon.id ||
    !pokemon.name?.trim() ||
    !pokemon.type ||
    typeof pokemon.height !== "number" ||
    pokemon.height <= 0 ||
    typeof pokemon.weight !== "number" ||
    pokemon.weight <= 0
  ) {
    return NextResponse.json(
      { message: "Données du Pokémon invalides" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Pokemon créé avec succès",
      pokemon,
    },
    { status: 201 }
  );
}
