let offset = 0
limit = 

function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type} ">${type}</li>`).join("")}
    </ol>
    <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    </li>
    `
}

document.addEventListener("DOMContentLoaded", function() {
    const pokemonList = document.getElementById("pokemonList")
    const loadMoreButton = document.getElementById("loadMoreButton")
});


pokeApi.getPokemons(limit, offset).then((pokemons = []) => {
    newHtml = pokemons.map(convertPokemonToHTML).join("")
    pokemonList.innerHTML = newHtml
})

function loadMore(limit, offset) {
    offset += limit
    pokeApi.getPokemons(limit, offset).then((pokemons = []) => {
        newHtml = pokemons.map(convertPokemonToHTML).join("")
        pokemonList.innerHTML += newHtml
    })
}

loadMoreButton.addEventListener("click", () => {
    loadMore(limit, offset)
})