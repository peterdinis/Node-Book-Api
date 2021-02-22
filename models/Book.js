const mongoose = require('../db');

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    info: {
        type: String,
        required: true
    },

    pages: {
        type: Number,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);