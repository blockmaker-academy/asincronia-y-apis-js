const { error } = require("console")

// Escribe tu código aquí:
const axios = required('axios')
axios
.get('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=> {
    console.log(response.data)
})
.catch((error)=> {
    console.error(error)
})