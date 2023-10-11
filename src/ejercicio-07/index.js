// Llamada a una API con Axios
const axios = require('axios')

axios
  .get('https://www.marca.com')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })