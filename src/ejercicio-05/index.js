// Escribe tu código aquí:


//Función para crear retraso
function crearPromiseConRetraso(valor, retraso) {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(valor) 
        }, retraso);
    })
}

//Inicializar 3 variables sin dar valor

let num1
let num2
let num3

crearPromiseConRetraso(20, 1000)
.then((reslutado1) => {
    console.log(reslutado1)
    num1 = reslutado1
    return crearPromiseConRetraso(53, 1000)
})
.then((resultado2) => {
    console.log(resultado2)
    num2 = resultado2
    return crearPromiseConRetraso(63, 1000)
})
.then((resultado3) => {
    console.log(resultado3)
    num3 = resultado3
    const suma = num1 + num2 + num3
    console.log('Suma: ', suma)
})