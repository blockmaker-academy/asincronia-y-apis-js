

// Escribe tu código aquí:
const promise1 = new Promise((resolve)=> setTimeout(()=>resolve(1),1000))
const promise2 = new Promise((resolve)=> setTimeout(() =>resolve(2),2000))
const promise3 = new Promise((resolve)=> setTimeout(()=>resolve(3),3000))

Promise.all([promise1,promise2,promise3]).then((resultados)=> {
console.log('Todas las promises se han resleto',resultados)
})