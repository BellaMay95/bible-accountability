const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Friend = require('../models/friends');

//Save Reading
router.post('/sendRequest', (req, res, next) => {
    let request = new Friend({
        sendUser: req.body.sendUser,
        friendUser: req.body.friendUser,
        timestamp: req.body.timestamp
    });

    //console.log(request);

    Friend.addPending(request, (err, reading) => {
        if (err) {
            //console.log(err);
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
            res.json({success: false, message: "Failed to reject request!"});
        }
        else {
            res.json({success: true, message: "Friend request rejected!"});
        }
    });
});

module.exports = router;