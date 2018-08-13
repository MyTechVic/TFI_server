//This code requires mongoose node module
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const PaintInfo = require('./controllers/PaintInfo');
const Deletejob = require('./controllers/DeleteJob');
const Newjob = require('./controllers/NewJob');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

//connecting local mongodb database named test
mongoose.connect(config.server.port ,{
	 useNewUrlParser: true 
})

console.log('MongoDB connected');
mongoose.connection.on('error', err => ('MongoDB connection error: ${err}'));


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