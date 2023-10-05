## Ejercicio 3: async/await

Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await.

```javascript
async function operacionAsincronica() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 'Operación completada'
}

async function ejecutarOperacion() {
  const resultado = await operacionAsincronica()
  console.log(resultado)
}

ejecutarOperacion()
```
