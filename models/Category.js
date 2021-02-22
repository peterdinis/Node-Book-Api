const mongoose = require('../db');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    info: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', CategorySchema);