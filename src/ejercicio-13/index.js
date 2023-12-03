// Escribe tu código aquí: EJERCICIO 13 (Manejo de errores en llamadas a APIs)

const axios = require('axios')

async function ObtenerDatosAPI(){
    try{
        const response = await
    axios.get('https://jsonplaceholder.typicode.com/posts/invalid')
        console.log(response.data)
    } catch (error) {
        console.error('Error al obtener datos', error.message)
    }
}

ObtenerDatosAPI()
