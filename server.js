//This code requires mongoose node module
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const PaintInfo = require('./controllers/PaintInfo');
const Deletejob = require('./controllers/DeleteJob');
const Newjob = require('./controllers/NewJob');


//connecting local mongodb database named test
mongoose.connect('mongodb://127.0.0.1:27017/TFI',{
	 useNewUrlParser: true 
})
console.log('MongoDB connected');
mongoose.connection.on('error', err => ('MongoDB connection error: ${err}'));



const app = express();
const port = 3001;
 
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