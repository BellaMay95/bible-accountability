const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "bibleccountability@gmail.com",
        pass: "mongoservsmtp"
    }
});

router.post('/feedback', (req, res, next) => {
    //console.log(req.body);
    var mailOptions={
        to : "bibleccountability@gmail.com",
        subject : "Bible Accountability " + req.body.type + ": " + req.body.subject,
        text : "Sent from " + req.body.username + ": " + req.body.content
    }
    //console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(err, response){
        if(err){
            console.log(err);
            res.json({success: false, message: "Failed to submit! Please try again later."});
        }
        else{
            //console.log("message sent!");
            console.log("Message sent: " + JSON.stringify(response));
            res.json({success: true, message: "Thank you for your feedback!"});
        }
    });
});

module.exports = router;