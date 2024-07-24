import { useEffect, useState } from "react";

import axios from "axios";

interface Props {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

const PokemonCard = (props: Props) => {
  const { id, name, onClick } = props;
  const [imgPokemon, setImgPokemon] = useState<string>("");

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const imageUrl = response.data.sprites.other.dream_world.front_default;
        setImgPokemon(imageUrl);
      } catch (error) {
        console.error("Error fetching Pokémon image:", error);
      }
    };

    fetchPokemonImage();
  }, [id]);

  return (
    <div onClick={() => onClick(id)}>
      {imgPokemon ? (
        <img className="size-40" src={imgPokemon} alt={name} />
      ) : (
        <p>Loading...</p>
      )}
      <label className="font-mono font-bold w-40 h-40 text-center">
        {name}
      </label>
    </div>
  );
};

export default PokemonCard;
