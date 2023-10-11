// Llamada a una API con fetch()

fetch("https://www.marca.com/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
