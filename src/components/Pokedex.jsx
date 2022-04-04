import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <>
      <div className="pokedex-container">
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return (
              <div key={pokemon.name}>
                <Pokemon pokemon={pokemon} />
              </div>
            );
          })}
        </div>
        <div className="pokemon-detail"></div>
      </div>
    </>
  );
};

export default Pokedex;
