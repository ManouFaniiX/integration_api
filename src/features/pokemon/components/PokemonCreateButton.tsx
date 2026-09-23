"use client";

import { useState } from "react";
import CreatePokemonForm from "./CreatePokemonForm";

export default function PokemonCreateButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {showForm ? "Fermer" : "Créer un Pokémon"}
      </button>

      {showForm && (
        <div className="mt-4">
          <CreatePokemonForm />
        </div>
      )}
    </div>
  );
}