const express = require ('express') // importa a biblioteca
const app = express() 
const port = 3000

const books = [
    {
        "id": 1,
        "name": "O Alquimista",
        "author": "Paulo Coelho",
        "year": 1988,
        "genre": "Romance",
        "pages": 181
     },

     {
        "id": 2,
        "name": "Hobbit",
        "author": "J. R. R. Tolkien",
        "year": 1937,
        "genre": "Fantasia",
        "pages": 350
     }
    ]

app.get('/books', (req,res) => {
    res.json(books)
})

app.get('/nome/:name', (req, res) => {
    return res.send (`Bem-vindo, ${req.params.name} ${req.query.sobrenome}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

