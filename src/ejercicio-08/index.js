fetch('https://api.example.com/users')
  .then(response => {
   
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  })
  .then(data => {
    
    const filteredData = data.filter(user => user.name.startsWith('A'));
    console.log(filteredData);
  })
  .catch(error => {
   
    console.error('There has been a problem with your fetch operation:', error);
  });
