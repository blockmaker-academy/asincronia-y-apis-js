// Escribe tu código aquí: FUNCION ASINCRONA ASYNC/AWAIT

async function operacionAsincrona(){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 'Operación completada'
}

async function ejecutarOperacion(){
    const resultado = await operacionAsincrona()
    console.log(resultado)
}

ejecutarOperacion()
