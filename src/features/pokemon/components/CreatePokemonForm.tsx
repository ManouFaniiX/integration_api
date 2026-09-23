"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createPokemon } from "@/features/pokemon/services/pokemon.service";

export default function CreatePokemonForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !type || !height || !weight) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const newPokemon = {
        id: crypto.randomUUID(),
        name,
        type,
        height: Number(height),
        weight: Number(weight),
      };

      await createPokemon(newPokemon);

      setName("");
      setType("");
      setHeight("");
      setWeight("");

      alert("Pokémon créé avec succès !");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création du Pokémon");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 rounded-xl border p-6"
    >
      <h2 className="text-2xl font-bold">
        Créer mon Pokémon
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">
          Nom
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Flamizard"
          className="rounded-md border p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type">
          Type
        </label>

        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-md border p-2"
        >
          <option value="">
            Choisir un type
          </option>

          <option value="fire">Feu</option>
          <option value="water">Eau</option>
          <option value="grass">Plante</option>
          <option value="electric">Électrik</option>
          <option value="psychic">Psy</option>
          <option value="ice">Glace</option>
          <option value="dark">Ténèbres</option>
          <option value="fairy">Fée</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="height">
          Taille
        </label>

        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Ex: 15"
          className="rounded-md border p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="weight">
          Poids
        </label>

        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Ex: 80"
          className="rounded-md border p-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Créer le Pokémon
      </button>
    </form>
  );
}