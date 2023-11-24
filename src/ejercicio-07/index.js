// Escribe tu código aquí:
const axios = require('axios')

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })