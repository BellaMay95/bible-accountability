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

const AcceptedRequestSchema = mongoose.Schema({
    user1: {
        type: Object,
        required: true
    },
    user2: {
        type: Object,
        required: true
    },
    reqtimestamp: {
        type: Object,
        required: false
    },
    acctimestamp: {
        type: Object,
        required: false
    }
})

const PendingRequest = module.exports = mongoose.model('pendingrequest', PendingRequestSchema);
const AcceptRequest = module.exports = mongoose.model('friend', AcceptedRequestSchema);

module.exports.addPending = function(request, callback) {
    //console.log(request);
    let pending = new PendingRequest(request);
    pending.save(callback);
}

module.exports.getSubPending = function(id, callback) {
    let query = {"sendUser.id": id};
    PendingRequest.find(query, callback);
}

module.exports.getRecvPending = function(id, callback) {
    let query = {"friendUser.id": id};
    PendingRequest.find(query, callback);
}

module.exports.rejectRequest = function(id, callback) {
    PendingRequest.findByIdAndRemove(id, callback);
}

module.exports.acceptRequest = function(friends, callback) {
    //console.log(friends);
    let request = new AcceptRequest(friends);
    request.save(callback);
}

module.exports.getFriendsList = function(id, callback) {
    let query = {
      $or: [
          { "user1.id": id },
          { "user2.id": id }
      ]
    }
    AcceptRequest.find(query, callback);
}