export const searchPokemon = async (pokemon) => {
    try {
        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        const dataShow = pokemonInfoToShow(data);
        return dataShow;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonData = async (pokemonUrl) => {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        const dataShow = pokemonInfoToShow(data);
        return dataShow;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemons = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

const pokemonInfoToShow = (pokemon) => {
    const animatedImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"
    const staticImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/"
    const pokemonData = {
        id: pokemon.id,
        name: pokemon.name,
        animatedImg: `${animatedImg}${pokemon.id}.gif`,
        staticImg: `${staticImg}${pokemon.id}.png`,
        types: pokemon.types
    }
    return pokemonData;
}