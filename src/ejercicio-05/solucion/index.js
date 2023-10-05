function crearPromiseConRetraso(valor, retraso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor)
    }, retraso)
  })
}

crearPromiseConRetraso(1, 1000)
  .then((resultado1) => {
    console.log(resultado1)
    return crearPromiseConRetraso(2, 1000)
  })
  .then((resultado2) => {
    console.log(resultado2)
    return crearPromiseConRetraso(3, 1000)
  })
  .then((resultado3) => {
    console.log(resultado3)
    const suma = resultado1 + resultado2 + resultado3
    console.log('Suma:', suma)
  })
