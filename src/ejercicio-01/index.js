function imprimirHolaMundoConCallback(callback) {
    setTimeout(function() {
        callback('Hola Mundo')
    }, 2000)
}

imprimirHolaMundoConCallback(function (mensaje) {
    console.log(mensaje)
})