const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database.js');

//Connect to database
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database Error: ' + err);
})

const app = express();

const users = require('./routes/users');
const reading = require('./routes/reading');
const friend = require('./routes/friend');

//Port Number
//const port = 3000;
const port = process.env.PORT || 8080;

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/reading', reading);
app.use('/friend', friend);

//index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});