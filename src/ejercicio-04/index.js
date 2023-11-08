async function operacionAsincrona() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Operación completada";
  }
    
  operacionAsincrona().then(resultado => console.log(resultado));
