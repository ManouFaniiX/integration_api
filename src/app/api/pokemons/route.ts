import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const pokemon = await request.json();

  return NextResponse.json(
    {
      message: "Pokemon créé avec succès",
      pokemon,
    },
    { status: 201 }
  );
}