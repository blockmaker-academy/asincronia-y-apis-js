// Escribe tu código aquí:
function imprimirHolaMundoConCallback(callback){
    console.log('Imprimiendo Hola Mundo...')
    setTimeout(function () {
        callback('Hola Mundo')
    }, 2000)
}

imprimirHolaMundoConCallback(function (mensaje) {
    console.log(mensaje)
})
