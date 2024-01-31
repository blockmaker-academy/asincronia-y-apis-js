const axios = require('axios')

async function obtenerDatosAPI() {
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const data = response.data
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

obtenerDatosAPI()