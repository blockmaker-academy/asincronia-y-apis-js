fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then((data)=> {
    return data.map((post) =>
    post.title.toUpperCase())
})
.then((titles) => {
    console.log('Titulos en mayuscula:', titles)
})
.catch((error) => {
    console.error('Error:', error)
})