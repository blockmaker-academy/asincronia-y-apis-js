## Ejercicio 4: Manejo de errores con Promises

Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir "Error: Promise rechazada".

```javascript
const miPromiseRechazada = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rechazada')
  }, 2000)
})

miPromiseRechazada.catch((error) => {
  console.log('Error:', error)
})
```
