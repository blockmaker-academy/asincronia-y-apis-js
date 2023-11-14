// Escribe tu código aquí:
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then((data)=> {
    const filteredPosts = data.filter
    ((post)=> post.title.startsWith('T'))
    console.log(filteredPosts)
})

