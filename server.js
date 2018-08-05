//This code requires mongoose node module
const mongoose = require('mongoose');
const express = require("express");

//connecting local mongodb database named test
const db = mongoose.connect('mongodb://127.0.0.1:27017/test');

//testing connectivity
mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});



const app = express();
const port = 3001;
 
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});