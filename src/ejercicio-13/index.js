async function processItem(item) {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log(`Procesado elemento: ${item}`);
  }
  
  
  async function processList(list) {
    for (const item of list) {
      await processItem(item); 
    }
    console.log('Todos los elementos han sido procesados.');
  }
  

  const items = ['Elemento1', 'Elemento2', 'Elemento3'];
  
  
  processList(items).then(() => console.log('Proceso completado.'));
