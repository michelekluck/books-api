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

app.get('/book/:id', (req, res) => {
    return res.json(getBookById(req.params.id, books)) //vai retornar  a função getBookById
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//função para pegar o elemento pelo id
function getBookById(id, books) {
    for(let i = 0; i < books.length; i++) { // i < books.length: passa por cada objeto do array
        if(books[i].id == id){ //se houver o id ele vai retornar o objeto referente ao id
            return books[i] 
        }       
    }
}

