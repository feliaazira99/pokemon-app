import { useEffect, useState } from "react";

import CatchPokemon from "./pokemon-catch";
import { PokemonResponse } from "../services/pokemon/type";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonResponse | null>(
    null
  );

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemonDetail(response.data);
    });
  }, [name]);

  if (!pokemonDetail) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center p-15 text-black mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 font-mono">
        {pokemonDetail.name}
      </h1>
      <div className="flex flex-row justify-center items-center space-x-4">
        <img
          className="w-60 h-60" // Menyesuaikan ukuran gambar
          src={pokemonDetail.sprites.other.dream_world.front_default}
          alt={pokemonDetail.name}
        />
        <div>
          {pokemonDetail.stats.map((stat, index) => (
            <h2 key={index} className="font-mono">
              {stat.stat.name}: {stat.base_stat}
            </h2>
          ))}
        </div>
      </div>
      <CatchPokemon pokemon={pokemonDetail} />
    </div>
  );
};

export default PokemonDetail;
