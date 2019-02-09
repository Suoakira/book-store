const mongoose = require('mongoose')

// Genre Schema 

const genreSchema = mongoose.Schema({
    name:{
        type: "string",
        required: true
    },
    create_date: {
        type: Date, 
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model("Genre", genreSchema)

//get all genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit)
}

// add a genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback)
}

// update a genre
module.exports.updateGenre = (id, genre, options, callback) => {
    const query = {_id: id}
    const update = {name: genre.name}
    Genre.findOneAndUpdate(query, update, genre, callback)
}

// remove a genre
module.exports.addGenre = (id, callback) => {
    const query = { _id: id }
    Genre.remove(query, callback)
}


