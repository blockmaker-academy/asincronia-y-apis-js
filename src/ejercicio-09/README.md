## Ejercicio 9: Async/await con llamadas a APIs

Crea una función asincrónica que realice una llamada a una API utilizando Axios y luego manipule los datos recibidos para mostrar información específica.

```javascript
const axios = require('axios')

async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    const data = response.data
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

obtenerDatosDeAPI()
```
