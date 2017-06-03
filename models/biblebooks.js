const mongoose = require('mongoose');
const config = require('../config/database');

//book schema
const BibleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chapters: {
        type: Number,
        required: true 
    }
});

const oldTestamentList = module.exports = mongoose.model('old', BibleSchema);
const newTestamentList = module.exports = mongoose.model('new', BibleSchema);

module.exports.getOldTestament = function(callback) {
    const query = {};
    oldTestamentList.find(query, callback);
    //db.newTestamentList.find({}, callback);
}

module.exports.getNewTestament = function(callback) {
    const query = {};
    newTestamentList.find(query, callback);
}