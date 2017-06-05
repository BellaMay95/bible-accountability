const mongoose = require('mongoose');
const config = require('../config/database');

//book schema
const PendingRequestSchema = mongoose.Schema({
    sendUser: {
        type: Object,
        required: true
    },
    friendUser: {
        type: Object,
        required: true 
    },
    timestamp: {
        type: Object,
        required: false
    }
});

const PendingRequest = module.exports = mongoose.model('pendingrequest', PendingRequestSchema);

module.exports.addPending = function(request, callback) {
    request.save(callback);
}

module.exports.getSubPending = function(id, callback) {
    let query = {"sendUser.id": id};
    PendingRequest.find(query, callback);
}

module.exports.getRecvPending = function(id, callback) {
    let query = {"friendUser._id": id};
    PendingRequest.find(query, callback);
}

module.exports.rejectRequest = function(id, callback) {
    PendingRequest.findByIdAndRemove(id, callback);
}