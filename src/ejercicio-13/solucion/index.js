const axios = require('axios')

async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/invalid')
    console.log(response.data)
  } catch (error) {
    console.error('Error al obtener datos:', error.message)
  }
}

obtenerDatosDeAPI()
