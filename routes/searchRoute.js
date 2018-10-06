// tfiPaintCodesRouter.js

const express = require("express");
const app = express();
const tfiPaintCodesRouter = express.Router();

const PaintInfoSchema = require("../models/PaintInfoSchema.js");

tfiPaintCodesRouter.route("/get").get(function(req, res) {
  const tfipaintcode = new PaintInfoSchema(req.body);
  console.log(req.body);
  tfipaintcode
    .save()
    .then(tfipaintcode => {
      res.json("Got data!!");
    })
    .catch(err => {
      res.status(400).send("unable to get data");
      console.log("CustomerID is required", err.res);
    });
});

tfiPaintCodesRouter.route("/").get(function(req, res) {
  let filter = req.query.filter ? JSON.parse(req.query.filter) : {};
  PaintInfoSchema.find(filter).exec(function(err, tfipaintcodes) {
    if (err) {
      console.log("this is an error!", err.res);
    } else {
      res.json(tfipaintcodes);
    }
  });
});

module.exports = tfiPaintCodesRouter;
