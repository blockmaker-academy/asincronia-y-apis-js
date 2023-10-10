// Manejo de errores con Promises
const miPromiseRechazada = new Promise ((resolver, rechazar) => {
    setTimeout (() => {
        rechazar ("Promesa rechazada")
    }, 2000)
})

miPromiseRechazada.catch((error) => {
    console.log("Error:", error)
})
