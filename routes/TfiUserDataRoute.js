// TfiUserDataRoute.js
const express = require('express');
const app = express();
const TfiUserDataRoute = express.Router();

// tfiPaintCodesRouter.js
const UserinfoSchema = require('../models/UserinfoSchema.js');

TfiUserDataRoute.route('/add').post(function (req, res) {
  const tfiuserdata = new TfiUserDataRoute(req.body);
  console.log(req.body)
  tfiuserdata.save()
    .then(tfiuserdata => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

TfiUserDataRoute.route('/').get(function (req, res) {
    TfiUserDataRoute.find(function (err, tfiuserdatas){
    if(err){
      console.log('this is an error!', err.res);
    }
    else {
      res.json(tfiuserdatas);
    }
  });
});

module.exports = TfiUserDataRoute;
