const Pokemon = (props) => {
  const { pokemon } = props;
  
  const pokemonClicked = () => {
    console.log(pokemon);
  };

  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-img-container">
          <img
            src={pokemon.animatedImg}
            alt={pokemon.name}
            className="pokemon-img"
            onClick={pokemonClicked}
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pokemon;
