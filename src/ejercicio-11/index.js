function promiseThatResolvesAfter(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
  }
  
  function promiseThatRejectsAfter(ms, reason) {
    return new Promise((_, reject) => setTimeout(() => reject(reason), ms));
  }
  
  const promise1 = promiseThatResolvesAfter(1000, 'Valor de la promesa 1');
  const promise2 = promiseThatRejectsAfter(2000, 'Rechazo de la promesa 2');
  const promise3 = promiseThatResolvesAfter(3000, 'Valor de la promesa 3');
  
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Promesa ${index + 1} resuelta con el valor: ${result.value}`);
        } else {
          console.log(`Promesa ${index + 1} rechazada con el motivo: ${result.reason}`);
        }
      });
    });