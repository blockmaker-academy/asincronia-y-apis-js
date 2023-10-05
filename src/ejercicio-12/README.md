## Ejercicio 12: async/await en un bucle

Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una lista de elementos uno por uno.

```javascript
async function procesarElementos(elementos) {
  for (const elemento of elementos) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Procesando elemento:', elemento)
  }
}

const elementos = [1, 2, 3, 4, 5]
procesarElementos(elementos)
```
