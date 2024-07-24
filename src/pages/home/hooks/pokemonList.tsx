import { useEffect, useState } from "react";

import { PokemonResponse } from "../../../services/pokemon/type";
import { getPokemon } from "../../../services/pokemon/api";
import { useQuery } from "../../../hooks/useQuery";

export const UsePokemonList = () => {
  const query = useQuery();
  const offset = (
    query.get("offset") !== null ? query.get("offset") : 1
  ) as string;
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonResponse>();

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await getPokemon(offset as string);
      console.log(response);

      setPokemonData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, pokemonData };
};
