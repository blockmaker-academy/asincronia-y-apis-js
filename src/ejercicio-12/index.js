async function procesarElementos(elmento) {
    for (const elmento of elementos) {
        await new Promise((resolve) => setTimeout(resolve,
            1000))
            console.log('Procesando elemento:', elmento)
    }
}

const elementos = [1,2,3,4,5]
procesarElementos(elementos)