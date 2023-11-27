// Escribe tu código aquí: LLAMADA A UNA API

fetch('https://rickandmortyapi.com/api/character')
.then((Response) => Response.json())
.then((data) => {
    console.log(data)
})
