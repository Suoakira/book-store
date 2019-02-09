const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')

Genre = require("./models/genre")

mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true })
const db = mongoose.connection


app.get(`/`, (req, res) => {
    res.send("Please use /api/books or /api/genres")
})

app.get(`/api/genres`, (req, res) => {
    Genre.getGenres((error, genres) => {
        if (error) {
            throw error
        } else {
            res.json(genres)
        }
    })
})

app.listen(3000)
console.log("running")