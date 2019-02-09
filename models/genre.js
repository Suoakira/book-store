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

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit)
}