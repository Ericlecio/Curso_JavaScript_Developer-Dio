

const pokeapi = {}

pokeapi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url).then((reaponse) => reaponse.json())
}

pokeapi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokeapi.getPokemonsDetails)))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
}