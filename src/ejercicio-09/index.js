const axios = require('axios');

async function fetchAndDisplayData() {
  try {
   
    const response = await axios.get('https://api.example.com/data');

    
    console.log(response.data);

    
    const filteredData = response.data.filter(item => item.property === 'desiredValue');
    
   
    console.log(filteredData);

    
    return filteredData;
  } catch (error) {
    
    console.error('Error al obtener o procesar los datos:', error);
  }
}


fetchAndDisplayData();
