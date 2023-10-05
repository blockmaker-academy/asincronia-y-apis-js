## Ejercicio 11: Promise.allSettled()

Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises.

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const promise2 = new Promise((reject) => setTimeout(() => reject('Error en Promise 2'), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500))

Promise.allSettled([promise1, promise2, promise3]).then((resultados) => {
  console.log('Estado de todas las Promises:', resultados)
})
```
