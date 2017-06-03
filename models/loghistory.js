const mongoose = require('mongoose');
const config = require('../config/database');

//User Schema
const ReadingSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    book: {
        type: String,
        required: true 
    },
    chapter: {
        type: Number,
        require: true
    },
    user_id: {
        type: String,
        require: true
    }
});

const Reading = module.exports = mongoose.model('Reading', ReadingSchema);

module.exports.logReading = function(reading, callback) {
    reading.save(callback);
}

module.exports.getReadingList = function(id, callback) {
    const query = {user_id: id};
    Reading.find(query, callback);
}