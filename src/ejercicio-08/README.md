## Ejercicio 8: Manipulación de datos de una API

Después de realizar una llamada a una API con fetch(), utiliza el método .then() para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    const filteredPosts = data.filter((post) => post.title.startsWith('A'))
    console.log(filteredPosts)
  })
```
