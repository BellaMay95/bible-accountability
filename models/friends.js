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

module.exports.rejectFriend = function(data, callback) {
    //console.log(data);
    let query = {
        $or: [
          { $and: [{"user1._id": data.id1 }, {"user2._id": data.id2}] },
          { $and: [{"user1._id": data.id2 }, {"user2._id": data.id1}] }
      ]
    }
    AcceptRequest.findOneAndRemove(query, callback);
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

module.exports.isFriend = function(friend, user, callback) {
    //console.log("friend: " + friend);
    //console.log("user: " + user);
    let query = {
        $or: [
          { $and: [{"user1.username": friend }, {"user2.username": user}] },
          { $and: [{"user1.username": user }, {"user2.username": friend}] }
      ]
    }
    AcceptRequest.find(query, callback);
}