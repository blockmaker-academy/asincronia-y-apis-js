// Escribe tu código aquí: EJERCICIO 11

const prom1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const prom2 = new Promise((resolve, reject) => setTimeout(() => reject('Se ha producido un error'), 2000))
const prom3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

Promise.allSettled([prom1, prom2, prom3]).then((resultado) => {
    console.log('Estado de las promises: ', resultado)
})
