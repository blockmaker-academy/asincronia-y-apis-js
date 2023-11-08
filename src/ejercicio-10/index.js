function resolveAfterDelay(delay, value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  
  const promise1 = resolveAfterDelay(1000, 'Primera promise resuelta');
  const promise2 = resolveAfterDelay(2000, 'Segunda promise resuelta');
  const promise3 = resolveAfterDelay(3000, 'Tercera promise resuelta');
  
 
  Promise.all([promise1, promise2, promise3])
    .then(values => {
      
      console.log(values); 
      console.log('Todas las promesas se han resuelto');
    })
    .catch(error => {
      
      console.error('Una promesa ha sido rechazada', error);
    });
