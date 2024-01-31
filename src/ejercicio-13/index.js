const axios = require('axios')

async function obtenerDatoasDeAPI() {
    try {
        const responce = await
        axios.get('https://jsonplaceholder.typicode.com/posts/invalid')
        console.log(responce.data)
    }  catch (error) {
        console.error('Error al obtener datos:',
        error.message)
    }
}
obtenerDatoasDeAPI()