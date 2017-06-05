const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.getUserByUsername(req.body.username, (err, user) => {
        if (err) {
            throw err;
        }
        else if (user) {
            return res.json({success: false, message: 'Username already exists'});
        }
        else {
            User.getUserByEmail(req.body.email, (err, user) => {
                if(err) {
                    throw err;
                }
                else if (user) {
                    return res.json({success: false, message: 'Email already exists. Try logging in'});
                }
                else {
                    User.addUser(newUser, (err, user) => {
                        if(err) {
                            res.json({success: false, message: "Failed to register user"});
                        }
                        else {
                            res.json({success: true, message: "User Registered!"});
                        }
                    });
                }
            });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) {
            throw err;
        }
        if(!user) {
            return res.json({success: false, message: 'User not found'});
        }
        
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err)
                throw err;
            if(isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 3600 //1 hour
                });

                res.json({
                    success: true,
                    token: "JWT " + token,
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            }

            else {
                return res.json({success: false, message: "Authentication Failed!"});
            }
        })
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

router.get('/userlist', (req, res, next) => {
    User.getUserList((err, user) => {
        if (err)
            throw err;
        else {
            //console.log(user);
            for(let i = 0; i < user.length; i++) {
                user[i].password = undefined;
            }
            res.json({UserList: user});
        }
    })
})

module.exports = router;