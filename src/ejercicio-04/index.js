// Escribe tu código aquí: MANEJO DE ERRORES CON PROMISES

const promiserechazada = new Promise((resolve, rejeact) => {
    setTimeout(() => {
        rejeact('PROMISE RECHAZADA!!!!')
    }, 2000);
})

promiserechazada.catch((error) => {
    console.log('Error:', error)
})