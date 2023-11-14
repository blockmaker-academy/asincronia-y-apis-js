const { promises } = require("dns");
const { resolve } = require("path");

// Escribe tu código aquí:
const promise1 = new Promise((resolve)=>setTimeout(()=> resolve(1),1000))
const promise2 = new Promise((resolve,reject)=>setTimeout(()=>reject('Error en promise2'),2000))
const promise3 = new Promise((resolve)=> setTimeout(() => resolve(3),1500))

Promise.allSettled([promise1,promise2,promise3]).then((resultados)=> {
    console.log('Estado de todas las promises:', resultados)
})
