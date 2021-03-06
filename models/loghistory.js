const mongoose = require('mongoose');
const config = require('../config/database');

//User Schema
const ReadingSchema = mongoose.Schema({
    date: {
        day: { 
            type: String,
            required: true
        },
        month: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        formatted: {
            type: String,
            required: true
        },
        moment: {
            type: String,
            required: false
        }
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
    },
    title: {
        type: String,
        require: false
    },
    note: {
        type: String,
        require: false
    }
});

const Reading = module.exports = mongoose.model('Reading', ReadingSchema);

module.exports.logReading = function(reading, callback) {
    reading.save(callback);
}

module.exports.removeReading = function(id, callback) {
    Reading.findByIdAndRemove(id, callback);
}

module.exports.getReadingList = function(id, callback) {
    const query = {user_id: id};
    Reading.find(query, callback)//.sort({date: -1}, callback);
}

module.exports.getNoteList = function(id, callback) {
    //const query = {user_id: id};
    const query = {
        $and: [
          { user_id: id },
          { title: {$exists: true } },
          { note: {$exists: true }}
      ]
    }
    Reading.find(query, callback)//.sort({date: -1}, callback);
}

module.exports.removeNote = function(id, callback) {
    const update = { $unset: { title: "", note: null } }
    Reading.findByIdAndUpdate(id, update, callback);
}

module.exports.editNote = function(data, callback) {
    const update = { note: data.note };
    Reading.findByIdAndUpdate(data.id, update, callback)
}