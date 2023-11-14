// Escribe tu código aquí:
const axios = require('axios')

async function obtenerDatosDeAPI() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const data = response.data
        console.log(data)
    }   catch (error) {
        console.error(error)
    }
}

obtenerDatosDeAPI()
