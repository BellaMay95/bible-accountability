const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Reading = require('../models/loghistory');
const List = require('../models/biblebooks');

//Save Reading
router.post('/save', (req, res, next) => {
    let newReading = new Reading({
        date: req.body.date,
        book: req.body.book,
        chapter: req.body.chapter,
        user_id: req.body.id,
        title: req.body.title,
        note: req.body.note
    });

    Reading.logReading(newReading, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to log reading"});
        }
        else {
            res.json({success: true, message: "Reading logged!"});
        }
    });
});

//Remove Reading
router.post('/remove', (req, res, next) => {
    let id = req.body._id;
    Reading.removeReading(id, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to remove reading"});
        }
        else {
            res.json({success: true, message: "Reading removed successfully!"});
        }
    });
});

//Load History
router.get('/load', (req, res, next) => {
    const id = req.headers.user_id;
    //console.log("user id: " + id);
    Reading.getReadingList(id, (err, reading) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!reading) {
            return res.json({success: true, message: 'No readings logged yet!'});
        }
        else {
            return res.json({success: true, reading: reading});
        }
    });
});

//Load Notes
router.get('/loadnotes', (req, res, next) => {
    const id = req.headers.user_id;
    //console.log("user id: " + id);
    Reading.getNoteList(id, (err, notes) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!notes) {
            return res.json({success: true, message: 'No notes logged yet!'});
        }
        else {
            return res.json({success: true, reading: notes});
        }
    });
});

//Remove notes
router.post('/removenote', (req, res, next) => {
    let id = req.body._id;
    Reading.removeNote(id, (err, reading) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Failed to remove note"});
        }
        else {
            res.json({success: true, message: "Note removed successfully!"});
        }
    });
});

//Edit notes
router.post('/editnote', (req, res, next) => {
    let data = {
        id: req.body._id,
        note: req.body.note
    };

    Reading.editNote(data, (err, note) => {
        if(err) {
            console.log(err);
            res.json({success: false, message: "Failed to edit note"});
        }
        else {
            res.json({success: true, message: "Note edited successfully!"});
        }
    })
})

//Get List of Old Testament Books
router.get('/oldbooks', (req, res, next) => {
    List.getOldTestament( (err, list) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!list) {
            res.json({success: false, message: "List empty!"});
        }
        else {
            res.json({success: true, stash: list});
        }
    })
})

//Get List of New Testament Books
router.get('/newbooks', (req, res, next) => {
    List.getNewTestament( (err, list) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!list) {
            res.json({success: false, message: "List empty!"});
        }
        else {
            res.json({success: true, stash: list});
        }
    })
})

module.exports = router;