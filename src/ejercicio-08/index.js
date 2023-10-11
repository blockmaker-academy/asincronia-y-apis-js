// Manipulación de datos de una API
fetch('https://as.com/')
  .then((response) => response.json())
  .then((data) => {
    const filteredPosts = data.filter((post) => post.title.startsWith('B'))
    console.log(filteredPosts)
  })