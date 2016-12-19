const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = new Schema({
    term: String,
    definition: String
});

module.exports = mongoose.model('Card', CardSchema)
