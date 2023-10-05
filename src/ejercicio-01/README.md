## Ejercicio 1: Callbacks

Escribe una función que utilice un callback para imprimir "Hola, mundo" después de 2 segundos de ejecución.

```javascript
function imprimirHolaMundoConCallback(callback) {
  setTimeout(function () {
    callback('Hola, mundo')
  }, 2000)
}

imprimirHolaMundoConCallback(function (mensaje) {
  console.log(mensaje)
})
```
