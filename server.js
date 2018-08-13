//This code requires mongoose node module
const express = require("express");
const bodyParser = require('body-parser');
const PaintInfo = require('./controllers/PaintInfo');
const Deletejob = require('./controllers/DeleteJob');
const Newjob = require('./controllers/NewJob');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
//const env = process.env.NODE_ENV || 'development';
//const config = require('./config')[env];

//connecting local mongodb database named test


const MONGO_URL = 'somecodehere';

return mongoose.connect(encodeURI(process.env.MONGO_URL));

console.log('MongoDB connected');


const app = express();
const port = process.env.PORT || 3000;
 
app.get("/", (req, res) => {
   res.json('If you see this message the server is running and the database is connected! YAY');
});

app.get("/PaintInfo", (req, res) => {
  PaintInfo.find({}).then(eachOne => {
    res.json(eachOne);
    })
});
  
app.get("/Deletejob", (req, res) => {
  
});

app.get("/Newjob", (req, res) => {
  
});



app.listen(port, () => {
  console.log("Server listening on port " + port);
});