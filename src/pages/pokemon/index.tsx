import React, { useEffect, useState } from "react";

interface CaughtPokemon {
  name: string;
  nickname: string;
  image: string; // Properti untuk URL gambar
}

const MyPokemon: React.FC = () => {
  const [caughtPokemons, setCaughtPokemons] = useState<CaughtPokemon[]>([]);

  useEffect(() => {
    // Mengambil data Pokémon yang tertangkap dari localStorage
    const storedPokemons = JSON.parse(
      localStorage.getItem("caughtPokemons") || "[]"
    );
    console.log("Stored Pokémon data:", storedPokemons); // Debugging line
    setCaughtPokemons(storedPokemons);
  }, []);

  const handleDelete = (pokemonName: string) => {
    // Menghapus Pokémon dari localStorage
    const caughtPokemons = JSON.parse(
      localStorage.getItem("caughtPokemons") || "[]"
    );
    const updatedPokemons = caughtPokemons.filter(
      (p: any) => p.name !== pokemonName
    );
    localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));

    // Memperbarui state untuk menghapus Pokémon dari tampilan
    setCaughtPokemons(updatedPokemons);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Pokémons</h1>
      {caughtPokemons.length === 0 ? (
        <p className="font-mono text-center">
          You haven't caught any Pokémon yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {caughtPokemons.map((pokemon) => (
            <li
              key={pokemon.name}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border rounded shadow-md"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 sm:w-16 sm:h-16 rounded"
              />
              <div className="flex-1 text-center sm:text-left">
                <span className="font-mono text-lg">
                  {pokemon.nickname} ({pokemon.name})
                </span>
              </div>
              <button
                onClick={() => handleDelete(pokemon.name)}
                className="mt-2 sm:mt-0 px-4 py-2 bg-red-600 text-white rounded font-mono"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPokemon;
