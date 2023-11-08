function esperarTresSegundos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise resuelta');
      }, 3000);
    });
  }
  
  esperarTresSegundos().then(mensaje => {
    console.log(mensaje);
  });
