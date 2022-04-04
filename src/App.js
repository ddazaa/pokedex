import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { getPokemons, getPokemonData } from "./api";
import Pagination from "./components/Pagination";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";

  const fetchPokemons = async (url) => {
    try {
      const data = await getPokemons(url);
      setInfo(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onPrevious = () => {
    fetchPokemons(info.previous);
  };

  const onNext = () => {
    fetchPokemons(info.next);
  };

  useEffect(() => {
    fetchPokemons(initialUrl);
  }, []);

  return (
      <div>
        <Navbar />
        <div className="App">
          <Searchbar />
          <Pagination
            previous={info.previous}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          {loading ? (
            <div>Cargando Pokedex...</div>
          ) : (
            <Pokedex pokemons={pokemons} />
          )}
        </div>
      </div>
  );
}

export default App;
