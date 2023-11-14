// Escribe tu código aquí:
async function operacionAsincronica() {
    await new Promise((resolve) =>setTimeout
    (resolve,1000))
    return 'operacion completada'
}

async function ejecutarOperacion() {
    const resultado = await
    operacionAsincronica()
    console.log(resultado)
}

ejecutarOperacion()
    