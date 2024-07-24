import PokemonCard from "../../components/pokemon-card";
import { UsePokemonList } from "./hooks/pokemonList";
import { getPokemonByName } from "../../services/pokemon/api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const { loading, pokemonData } = UsePokemonList();
  const query = useQuery();
  const offset =
    query.get("offset") !== null ? parseInt(query.get("offset")!) : 1;

  const extractId = (url: string) => {
    const segments = url.split("/");
    return segments[segments.length - 2];
  };

  const handleNextPage = () => {
    const numOffset = Number(offset);
    navigate(`?offset=${numOffset + 1}`);
  };

  const handleBackPage = () => {
    const numOffset = Number(offset);
    if (numOffset > 1) {
      navigate(`?offset=${numOffset - 1}`);
    }
  };

  const handlePokemonClick = async (name: string) => {
    try {
      await getPokemonByName(name);
      navigate(`/pokemon/${name}`);
    } catch (error) {
      console.error(error);
    }
  };

  const itemsPerPage = 21;
  const startIndex = (offset - 1) * itemsPerPage;
  const currentData = pokemonData?.results.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col py-5 background-color:'#FFFFFF'">
      {!loading ? (
        <div className="flex flex-row px-5 py-5 gap-3 flex-wrap justify-center">
          {currentData?.map((item: any) => (
            <PokemonCard
              key={item.name}
              id={extractId(item.url)}
              name={item.name}
              onClick={() => handlePokemonClick(item.name)}
            />
          ))}
        </div>
      ) : (
        <div className="font-mono font-bold">Loading..</div>
      )}
      <div className="flex flex-row justify-center gap-3 p-8">
        <button
          onClick={handleBackPage}
          className="font-semibold font-mono"
          disabled={Number(offset) <= 1}
        >
          Back
        </button>
        <button onClick={handleNextPage} className="font-bold font-mono">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
