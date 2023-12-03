// Escribe tu código aquí: MANIPULACIÓN DE DATOS DE UNA API
// https://jsonplaceholder.typicode.com/posts
// https://pokeapi.co/api/v2/pokemon


fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json())
.then((data) => {
    const FiltrarPokemon = data.filter((name) => name.startwith('p'))
    console.log(FiltrarPokemon)
})

