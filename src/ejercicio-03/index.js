function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  
  async function performOperation() {
    await delay(1000); 
    return "Operación completada";
  }
  
  
  performOperation().then(message => {
    console.log(message); 
  });
