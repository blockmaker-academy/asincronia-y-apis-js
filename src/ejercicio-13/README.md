## Ejercicio 13: Manejo de errores en llamadas a APIs

Realiza una llamada a una API con Axios y maneja posibles errores utilizando try/catch para mostrar un mensaje de error en caso de fallo.

```javascript
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
```
