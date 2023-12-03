// Escribe tu código aquí: EJERCICIO 12

async function elementprocess(elements){
    for (const element of elements){
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('Procesando elemento: ', element)
    }
}

const elements = [10,20,30,40,50]
elementprocess(elements)