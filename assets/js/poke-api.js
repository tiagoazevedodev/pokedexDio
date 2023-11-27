
const pokeApi = {}

pokeApi.getPokemons = (limit = 0, offset = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error("deu erro "+error))
}
