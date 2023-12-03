// Escribe tu código aquí: PROMISES.ALL

//Crear promises

const prom1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const prom2 = new Promise((resolve) => setTimeout(() => resolve(2),  2000))
const prom3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

Promise.all([prom1, prom2, prom3]).then((resultado) => {
    console.log('Se han resuelto todas las promises:', resultado)
})
