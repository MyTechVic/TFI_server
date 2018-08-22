//This code requires mongoose node module
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const tfiPaintCodesRouter = require('./routes/tfiPaintCodesRouter');
const mongoose = require('mongoose');


const MONGO_URL = 'mongodb://Matt:Outbreak23@ds119652.mlab.com:19652/tfi-database';
mongoose.connect(MONGO_URL).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/saveInfo', tfiPaintCodesRouter);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});