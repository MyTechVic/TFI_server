//This code requires mongoose node module
const express = require("express");
const bodyParser = require('body-parser');
const PaintInfo = require('./controllers/PaintInfo');
const Deletejob = require('./controllers/DeleteJob');
const Newjob = require('./controllers/NewJob');
var cors = require('cors')
//const PaintInfoSchema = require('./models/PaintInfoSchema');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
//const env = process.env.NODE_ENV || 'development';
//const config = require('./config')[env];

//connecting local mongodb database named test

// server/models/Article.js
const Schema = mongoose.Schema;

const MONGO_URL = 'mongodb://Matt:Outbreak23@ds119652.mlab.com:19652/tfi-database';


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
    companyName: '',
    curtainCodes: '',
    sinageCodes: '',
    Notes: '',
    Method: ''
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
const port = process.env.PORT || 3001;
app.use(cors())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/", (req, res) => {
   res.json('If you see this message the server is running and the database is connected! YAY');
});


app.get("/saveInfo", function(request, response){

   const companyName = request.body.companyName;
   const curtainCodes = request.body.curtainCodes;
   const sinageCodes = request.body.sinageCodes;
   const Notes = request.body.Notes;
   const Method = request.body.Method;
   console.log("Post Received: %s %s %s", companyName, curtainCodes, sinageCodes, Notes , Method );
});
  
app.get("/Deletejob", (req, res) => {
  
});

app.get("/Newjob", (req, res) => {
  
});




app.listen(port, () => {
  console.log("Server listening on port " + port);
});