// tfiPaintCodesRouter.js

const express = require('express');
const app = express();
const tfiPaintCodesRouter = express.Router();

const PaintInfoSchema = require('../models/PaintInfoSchema.js');

tfiPaintCodesRouter.route('/add').post(function (req, res) {
  const tfipaintcode = new PaintInfoSchema(req.body);
  console.log(req.body)
  tfipaintcode.save()
    .then(tfipaintcode => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    console.log('CustomerID is required', err.res);
    });
});

tfiPaintCodesRouter.route('/').get(function (req, res) {
    PaintInfoSchema.find(function (err, tfipaintcodes){
    if(err){
      console.log('this is an error!', err.res);
    }
    else {
      res.json(tfipaintcodes);
    }
  });
});

module.exports = tfiPaintCodesRouter;
