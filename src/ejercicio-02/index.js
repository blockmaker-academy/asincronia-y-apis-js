const miPromise = new Promise((resolve, reject) => {
    console.log('espera.....')
    setTimeout(() => {
        resolve('Promise resuelta')
    }, 3000)
})
miPromise.then((resultado) => {
    console.log(resultado)
})
