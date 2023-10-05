## Ejercicio 6: Llamada a una API con fetch()

Utiliza el método fetch() para obtener datos de una API de tu elección. Imprime los datos resultantes en la consola.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
```
