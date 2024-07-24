import API from "../axiosWithConfig";
import { PokemonResponse } from "./type";

const getPokemon = async (offset: string) => {
    try {
      const response = await API.get(`/pokemon-species/?limit=65&offset=${offset}`);
      
      return response.data as PokemonResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonByName = async (name: string) => {
    try {
      const response = await API.get(`/pokemon/${name}`);
      return response.data as PokemonResponse;
    } catch (error) {
      console.error(error);
    }
  };

  export { API, getPokemon, getPokemonByName }
