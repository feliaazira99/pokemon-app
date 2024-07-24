import pokemonIcon from "../assets/icon.png";

function Navbar() {
  return (
    <div className="flex flex-row w-full justify-center px-5 py-3 font-bold  bg-cyan-600 shadow-lg">
      {/* <h2 className="text-base font-mono text-white">POKEMON</h2> */}
      <div className="flex items-center">
        <img src={pokemonIcon} alt="Pokemon Icon" className="h-12 w-12 mr-3" />
      </div>
    </div>
  );
}

export default Navbar;
