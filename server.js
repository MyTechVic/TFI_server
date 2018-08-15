//This code requires mongoose node module
const express = require("express");
const bodyParser = require('body-parser');
const PaintInfo = require('./controllers/PaintInfo');
const Deletejob = require('./controllers/DeleteJob');
const Newjob = require('./controllers/NewJob');
//const PaintInfoSchema = require('./models/PaintInfoSchema');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
//const env = process.env.NODE_ENV || 'development';
//const config = require('./config')[env];

//connecting local mongodb database named test

// server/models/Article.js
const Schema = mongoose.Schema;

const MONGO_URL = '/////';


mongoose.connect(MONGO_URL);

let db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

  // Create schema
 let PaintInfoSchema =  mongoose.Schema(
    {
    	companyName: String,
        curtainCodes: String,
        sinageCodes: String,
        Notes: String,
        Method: String,
    });



  // Store documents in a collection called "paintinfo"
  let PaintInfo = mongoose.model('PaintInfos', PaintInfoSchema);
  /*
   * First we'll add some info. Nothing is required to create the
   * collection; it is created automatically when we insert.
   */

 // Create seed data
  let paintinfomation = new PaintInfo({
    companyName: 'LinFox',
    curtainCodes: '#000000',
    sinageCodes: '#FFFFFF',
    Notes: 'this is a test!',
    Method: 'the method is all of the code you wrote!'
  });


  let list = [paintinfomation]

  PaintInfo.insertMany(list).then(() => {
  }).then(() => {

    // Only close the connection when your app is terminating
    return mongoose.connection.close()

  }).catch(err => {

    // Log any errors that are thrown in the Promise chain
    console.log(err)

  })
});



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