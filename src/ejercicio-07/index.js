const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    
    console.log(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
   
  });
