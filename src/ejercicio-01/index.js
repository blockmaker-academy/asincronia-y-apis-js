// Escribe tu código aquí:
function imprimirHolaMundocConCallback(callback) {
    console.log('Imprimiendo saludo......')
    setTimeout(() => {
        callback('Hola, mundo SOPLA CONDON')
    }, 2000)
  }

imprimirHolaMundocConCallback((mensaje) => {
    console.log(mensaje)
 })
