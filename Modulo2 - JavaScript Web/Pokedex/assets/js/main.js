
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ol cl ass="types">
                        <li class="type">${convertPokemonTypesToLi(pokemon.types).join(' ')}</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

    const newHtml = newList.join('')
    pokemonList.innerHTML += newHtml

})

