## Ejercicio 5: Encadenamiento de Promises

Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados y mostrar el resultado final.

```javascript
function crearPromiseConRetraso(valor, retraso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor)
    }, retraso)
  })
}
// Inicializamos 3 variables sin asignarle valor.
let numero1
let numero2
let numero3

crearPromiseConRetraso(1, 1000)
  .then((resultado1) => {
    console.log(resultado1)
    numero1 = resultado1
    return crearPromiseConRetraso(2, 1000)
  })
  .then((resultado2) => {
    console.log(resultado2)
    numero2 = resultado2
    return crearPromiseConRetraso(3, 1000)
  })
  .then((resultado3) => {
    console.log(resultado3)
    numero3 = resultado3
    const suma = numero1 + numero2 + numero3
    console.log('Suma:', suma)
  })
```
