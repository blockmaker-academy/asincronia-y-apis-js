// Async/await con llamadas a APIs
const axios = require('axios')

async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://www.deia.eus')
    const data = response.data
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

obtenerDatosDeAPI()
