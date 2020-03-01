"use strict";
const express = require('express');
const  bodyParser  =  require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const config = require('./config.js');

const app = express();
const  router  =  express.Router();
app.use(cors());

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());

// Create database connection
const dbConnection = mysql.createConnection(config);

// Connect to database and post message
dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

// Message from pinging server
router.get('/', (req, res) => {
    res.status(200).send('This is an authentication server');
});

// Creates listener for http requests
app.use(router);
const  port  =  process.env.PORT  ||  3000;
app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
});

// --------------------------------------------------------
// Router functions
// --------------------------------------------------------

// Responds to register posts and adds user registration info to database
router.post('/register', (req, res) => {
    const mesBody = req.body;
    const user = [mesBody.id, mesBody.email, mesBody.dob, mesBody.weight, mesBody.height, mesBody.gender];
    const query = `INSERT INTO User(UserId, Email, DOB, Weight, Height, Gender) VALUES(?,?,?,?,?,?)`;
    dbConnection.query(query, user, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });

    const allergies = mesBody.allergy.split(',');
    for (let i = 0; i < allergies.length; ++i) {
        const allergy = allergies[i].trim().toLowerCase();
        if (allergy !== 'null' && allergy !== 'none' && allergy !== '') {
            const allergyMes = [mesBody.id, allergy];
            const query = `INSERT INTO Allergy(UserId, Allergy) VALUES(?,?)`;
            dbConnection.query(query, allergyMes, (err) => {
                if (err) {
                    return console.error(err.message);
                }
            });
        }
    }
});
