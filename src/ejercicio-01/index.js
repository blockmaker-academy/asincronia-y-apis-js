// Escribe tu código aquí:
function imprimirHolaMundoConCallback(callback) {
   
    setTimeout(function () {
        callback('Hola, mundo') 
    }, 2000)
}

imprimirHolaMundoConCallbacK(function (mensaje) {        
        console.log(mensaje)
})