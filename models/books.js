const mongoose = require('mongoose')

// Book Schema 
const bookSchema = mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    genre: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true

    },
    publisher: {
        type: "string",
        required: true

    },
    pages: {
        type: "string",
        required: true
    },
    image_url: {
        type: "string",
        required: true
    },
    buy_url: {
        type: "string",
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Book = module.exports = mongoose.model("Book", bookSchema)

module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit)
}

module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback)
}

module.exports.addBook = (book, callback) => {
    Book.create(book, callback)
}