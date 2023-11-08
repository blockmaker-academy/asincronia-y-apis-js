// Escribe tu código aquí:
function imprimirHolaMundoAyncrono(callback) {
    setTimeout(() => {
        callback('Hola mundo')
    }, 2000)
}
imprimirHolaMundoAyncrono((mensaje) => {
    console.log(mensaje)
})