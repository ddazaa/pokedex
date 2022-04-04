import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Buscar pokemon"
            onChange={onChange}
          />
        </div>
        <div>
          <button className="searchbar-btn" onClick={onClick}>
            Buscar
          </button>
        </div>
      </div>
      <div>
        {pokemon && (
          <div>
            <div>{pokemon.name}</div>
            <div>{pokemon.weight}</div>
            <img src={pokemon.animatedImg} alt="" />
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Searchbar;
