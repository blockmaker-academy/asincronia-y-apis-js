function imprimirHolaMundoConCallback(callback) {
    console.log('esperando....')
    setTimeout(function () {
        callback('Hola, mundo')
    }, 2000)
}

imprimirHolaMundoConCallback(function (mensaje) {
    console.log(mensaje)
})