const Navbar = () => {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png";
  return (
    <>
      <div className="navbar">
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-img" />
        <h1>Pokedex</h1>
      </div>
    </>
  );
};

export default Navbar;
