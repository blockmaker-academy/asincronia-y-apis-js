fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  })
  .then(data => {
    
    return data.filter(user => user.name.startsWith('C'));
  })
  .then(filteredUsers => {
   
    return filteredUsers.map(user => {
      return {
        name: user.name,
        email: user.email,
        company: user.company.name
      };
    });
  })
  .then(mappedUsers => {
   
    return mappedUsers.reduce((companies, user) => {
      return companies ? `${companies}, ${user.company}` : user.company;
    }, '');
  })
  .then(companyNames => {
   
    console.log(`Compañías: ${companyNames}`);
  })
  .catch(error => {
   
    console.error('There was a problem with the fetch operation:', error);
  });
