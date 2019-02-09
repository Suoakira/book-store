const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')


app.use(bodyParser.json())
Genre = require("./models/genre")
Book = require("./models/books")

mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true })
const db = mongoose.connection


app.get(`/`, (req, res) => {
    res.send("Please use /api/books or /api/genres")
})

// get all genres
app.get(`/api/genres`, (req, res) => {
    Genre.getGenres((error, genres) => {
        if (error) {
            throw error
        } else {
            res.json(genres)
        }
    })
})

//get all books
app.get(`/api/books`, (req, res) => {
    Book.getBooks((error, genres) => {
        if (error) {
            throw error
        } else {
            res.json(genres)
        }
    })
})

// get a single book
app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, (error, book) => {
        if (error) {
            console.log(error)
        } else {
            res.json(book)
        }
    })
})

// add a book
app.book('/api/books/', (req, res) => {
    const book = req.body
    book.addBook(book, (error, book) => {
        if (error) {
            console.log(error)
        } else {
            res.json(book)
        }
    })
})

// add a genre
app.post('/api/genres/', (req, res) => {
    const genre = req.body
    Genre.addGenre(genre, (error, genre) => {
        if (error) {
            console.log(error)
        } else {
            res.json(genre)
        }
    })
})

// can update a genre
app.put('/api/genres/:id', (req, res) => {
    const id = req.params._id
    const genre = req.body
    Genre.updateGenre(id, genre, {}, (error, genre) => {
        if (error) {
            console.log(error)
        } else {
            res.json(genre)
        }
    })
})

// delete a genre
app.delete('/api/genres/;_id', (req, res) => {
    const id = req.params.id
    Genre.removeGenre(id, (error, genre) => {
        if (error) {
            console.log(error)
        } else {
            res.json(genre)
        }
    })
})


app.listen(3000)
console.log("running")