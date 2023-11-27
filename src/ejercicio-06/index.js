// Escribe tu código aquí: LLAMADA A UNA API

fetch('https://rickandmortyapi.com/api/character')
.then((Response) => Response.json())
.then((data) => {
    //Filtrar por campos devueltos en el API
    const personajesVivos = data.results.filter((personaje) =>
    personaje.status === 'Alive')

    console.log(data)
})
