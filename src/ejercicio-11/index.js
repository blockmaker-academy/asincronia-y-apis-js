const promise1 = new Promise((resolve)=>
setTimeout(() => resolve(1), 1000))
const promise2 = new Promise((resolve, reject) =>
setTimeout(()=> reject('Error en Promise 2'), 2000))
const promise3 = new Promise((resolve)=>
setTimeout(() => resolve(3), 1500))

Promise.allSettled([promise1, promise2,
promise3]).then((resultados) => {
    console.log('Estados de todas las Promaises:',
    resultados)
})
