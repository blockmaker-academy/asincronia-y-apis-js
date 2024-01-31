fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((Response)=> Response.json())
.then((data) => {
    console.log(data)
})