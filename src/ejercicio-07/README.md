## Ejercicio 7: Llamada a una API con Axios

Realiza una llamada a una API utilizando Axios. Muestra los datos obtenidos en la consola.

Nota: Axios ya esta incluido en las dependencias del fichero package.json. Para poderlo utilizar ejecuta el siguiente comando en la raiz del repositorio para instalar las dependencias:

```bash
npm install
```

```javascript
const axios = require('axios')

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```
