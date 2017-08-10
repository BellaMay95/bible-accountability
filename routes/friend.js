const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Friend = require('../models/friends');


router.post('/sendRequest', (req, res, next) => {
    //console.log(req.body.sendUser);
    let request = new Object;
    request.sendUser = req.body.sendUser;
    request.friendUser = req.body.friendUser;
    request.timestamp = req.body.timestamp;

    //console.log("req object: " + JSON.stringify(request));

    Friend.addPending(request, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to submit friend request!"});
        }
        else {
            res.json({success: true, message: "Request sent!"});
        }
    });
});

router.get('/getsubpending', (req, res, next) => {
    const id = req.headers.user_id;
    Friend.getSubPending(id, (err, pending) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to get submitted requests!"});
        }
        else {
            res.json({success: true, subRequests: pending});
        }
    })
});

router.get('/getrecvpending', (req, res, next) => {
    const id = req.headers.user_id;
    Friend.getRecvPending(id, (err, pending) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to get received requests!"});
        }
        else {
            res.json({success: true, recvRequests: pending});
        }
    })
});

router.post('/rejrequest', (req, res, next) => {
    let id = req.body._id;
    Friend.rejectRequest(id, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to reject request!"});
        }
        else {
            res.json({success: true, message: "Friend request rejected!"});
        }
    });
});

router.post('/accrequest', (req, res, next) => {
    let request = req.body;
    let req_id = req.body._id;
    req.body._id = undefined;
    
    Friend.acceptRequest(request, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to accept request!"});
        }
        else {
            Friend.rejectRequest(req_id, (err, reading) => {
                if (err) {
                    console.log(err);
                    res.json({success: false, message: "Failed to accept request!"});
                }
                else {
                    res.json({success: true, message: "Friend request accepted!"});
                }
            });
        }
    });
});

router.post('/rejfriend', (req, res, next) => {
    //console.log(req.body);
    let request = {
        id1: req.body.sendUser._id,
        id2: req.body.friendUser._id
    };

    Friend.rejectFriend(request, (err, data) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to remove friend!"});
        }
        else {
            res.json({success: true, message: "Friend removed successfully!"});
        }
    })
})

router.get('/getfriends', (req, res, next) => {
    const id = req.headers.user_id;
    Friend.getFriendsList(id, (err, list) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to get friend list!"});
        }
        else {
            res.json({success: true, list: list});
        }
    })
});

router.get('/isfriend', (req, res, next) => {
    //console.log("in isfriend function");
    //console.log(req.headers);
    const friendName = req.headers.friend_name;
    const userName = req.headers.user_name;

    Friend.isFriend(friendName, userName, (err, friend) => {
        //console.log(friend);
        if (err) {
            console.log(err);
            res.json({success: false, message: err});
        }
        else if (friend.length > 0) {
            //console.log("success!");
            res.json({success: true, message: "found friend"});
        }
        else {
            //console.log("failure!");
            res.json({success: false, message: "not friends"});
        }
    })
})

module.exports = router;