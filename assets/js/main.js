const offset = 0; 
const limit = 8;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
} 

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join("")}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

document.addEventListener("DOMContentLoaded", function() {
    const pokemonList = document.getElementById("pokemonList")
});


pokeApi.getPokemons(limit, offset).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join("")
})
