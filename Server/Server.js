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
    dbConnection.query(query, user, (err) => {
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
            dbConnection.query(query, allergyMes, (err, results) => {
                if (err) { return console.error(err.message); }
                res.send(results);
            });
        }
    }
});

router.get('/getUserInfo/:userId', (req, res) => {
    const userID = req.params.userId;
    const query = `SELECT * FROM User WHERE UserId = ` + mysql.escape(userID);
    dbConnection.query(query, function (err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.get('/getFoods/:userId/:date', (req, res) => {
    const userID = req.params.userId;
    const date = req.params.date;
    const query = `SELECT * FROM Food WHERE UserId = ` + mysql.escape(userID) + ' AND Date_Enter = ' + mysql.escape(date);
    dbConnection.query(query, function (err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.post('/addFood', (req, res) => {
    const mesBody = req.body;
    const food = [mesBody.Date_Enter, mesBody.UserId, mesBody.Name, mesBody.BrandName,
        mesBody.ServingQuantity, mesBody.Units, mesBody.Calories, mesBody.TotalFat,
        mesBody.SaturatedFat, mesBody.Cholesterol, mesBody.Sodium, mesBody.Carbohydrates,
        mesBody.Fiber, mesBody.Sugar, mesBody.Protein];
    const query = `INSERT INTO Food(Date_Enter, UserId, Name, BrandName, ServingQuantity, Units,
        Calories, TotalFat, SaturatedFat, Cholesterol, Sodium, Carbohydrates, Fiber, Sugar, Protein) 
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    dbConnection.query(query, food, (err, results) => {
        if (err) { return console.error(err.message); }
        res.send(results);
    });
});

router.post('/removeFood', (req, res) => {
    const query = 'DELETE FROM Food WHERE Food_ID = ' + mysql.escape(req.body.id);
    dbConnection.query(query, function (err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.get('/getExercises/:userId/:date', (req, res) => {
    const userID = req.params.userId;
    const date = req.params.date;
    const query = `SELECT * FROM Exercise WHERE UserId = ` + mysql.escape(userID) +
        ' AND Date_Exercise = ' + mysql.escape(date);
    dbConnection.query(query, function (err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.post('/addExercise', (req, res) => {
    const mesBody = req.body;
    const exercise = [mesBody.Calories, mesBody.UserId, mesBody.Date_Exercise, mesBody.Name];
    const query = `INSERT INTO Exercise(Calories, UserId, Date_Exercise, Name) VALUES(?,?,?,?)`;
    dbConnection.query(query, exercise, (err, results) => {
        if (err) { return console.error(err.message); }
        res.send(results);
    });
});

router.post('/removeExercise', (req, res) => {
    const query = 'DELETE FROM Exercise WHERE Exercise_ID = ' + mysql.escape(req.body.id);
    dbConnection.query(query, function (err, result){
        if (err) throw err;
        res.send(result);
    });
});
