function imprimirConRetraso(callback) {
    setTimeout(callback, 2000);
  }
  
  imprimirConRetraso(function() {
    console.log("Hola, mundo");
  });
