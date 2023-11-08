function promiseConRetardo(retardo, valor) {
    return new Promise(resolve => setTimeout(() => resolve(valor), retardo));
  }
  
  promiseConRetardo(1000, 1)
    .then(resultado1 => {
      console.log("Primer resultado:", resultado1);
      return promiseConRetardo(1000, resultado1 + 2); // Sumamos 2 al resultado anterior
    })
    .then(resultado2 => {
      console.log("Segundo resultado:", resultado2);
      return promiseConRetardo(1000, resultado2 + 3); // Sumamos 3 al resultado anterior
    })
    .then(resultadoFinal => {
      console.log("Resultado final:", resultadoFinal);
    })
    .catch(error => {
      console.error("Se ha producido un error en la cadena de promesas", error);
    });
