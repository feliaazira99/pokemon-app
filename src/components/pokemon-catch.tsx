import React, { useEffect, useState } from "react";

import { PokemonResponse } from "../services/pokemon/type";
import axios from "axios";

interface CatchPokemonProps {
  pokemon: PokemonResponse;
}

const CatchPokemon: React.FC<CatchPokemonProps> = ({ pokemon }) => {
  const [nickname, setNickname] = useState("");
  const [caught, setCaught] = useState(false);
  const [imgPokemon, setImgPokemon] = useState<string>("");

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const imageUrl = response.data.sprites.other.dream_world.front_default;
        setImgPokemon(imageUrl);
      } catch (error) {
        console.error("Error fetching Pokémon image:", error);
      }
    };

    fetchPokemonImage();

    const storedNickname = localStorage.getItem(pokemon.name);
    if (storedNickname) {
      setCaught(true);
      setNickname(storedNickname);
    }
  }, [pokemon.name]);

  const handleCatch = () => {
    if (Math.random() > 0.5) {
      setCaught(true);
    } else {
      alert("Failed to catch Pokémon!");
    }
  };

  const handleSubmit = () => {
    const caughtPokemons = JSON.parse(
      localStorage.getItem("caughtPokemons") || "[]"
    );
    const newPokemon = {
      name: pokemon.name,
      nickname: nickname,
      image: imgPokemon,
    };

    localStorage.setItem(pokemon.name, nickname);
    localStorage.setItem(
      "caughtPokemons",
      JSON.stringify([...caughtPokemons, newPokemon])
    );
    alert(`Nickname for ${pokemon.name} has been saved!`);
  };

  const handleRelease = () => {
    setCaught(false);
    localStorage.removeItem(pokemon.name);

    const caughtPokemons = JSON.parse(
      localStorage.getItem("caughtPokemons") || "[]"
    );
    const updatedPokemons = caughtPokemons.filter(
      (p: any) => p.name !== pokemon.name
    );
    localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));

    setNickname("");
  };

  return (
    <div className="mt-4">
      {caught ? (
        <div>
          <p className="font-mono">CONGRATULATIONS YOU CAUGHT {pokemon.name}</p>
          <div className="mt-2">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter nickname"
              className="border p-2 rounded font-mono text-black"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded ml-2 font-mono"
            >
              SUBMIT
            </button>
          </div>
          <button
            onClick={handleRelease}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded font-mono"
          >
            RELEASE
          </button>
        </div>
      ) : (
        <button
          onClick={handleCatch}
          className="px-4 py-2 bg-green-600 text-white rounded ml-2 font-mono"
        >
          CATCH!
        </button>
      )}
    </div>
  );
};

export default CatchPokemon;
