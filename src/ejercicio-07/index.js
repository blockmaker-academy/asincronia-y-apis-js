// Escribe tu código aquí: LLAMADA AL API con dependencia AXIOS -- EJEMPLO CON API POCKEMON :)

const axios = require('axios')

axios
  .get('https://pokeapi.co/api/v2/pokemon')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })