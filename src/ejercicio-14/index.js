// Escribe tu código aquí: EJERCICIO 14 Encadenamiento de Promises

//fetch('https://pokeapi.co/api/v2/pokemon-species/')
//    .then((Response) => Response.json())
//    .then((data) => {
//        return data.map((aegislash) => name.toUpperCase())
//    })
//    .catch((error) => {
//      console.error('Error:', error)
//    })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    return data.map((post) => post.title.toUpperCase())
  })
  .then((titles) => {
    console.log('Títulos en mayúsculas:', titles)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
