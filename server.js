//This code requires mongoose node module
const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const bodyParser = require("body-parser");
const passport = require("passport");
const tfiPaintCodesRouter = require("./routes/tfiPaintCodesRouter");
const searchRoute = require("./routes/searchRoute");
const keys = require("./config/keys");

const users = require("./routes/user");

const cors = require("cors");
const app = express();
app.use(passport.initialize());
require("./passport")(passport);

const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI).then(
	() => {
		console.log("Database is connected");
	},
	err => {
		console.log("Can not connect to the database" + err);
	}
);

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/saveInfo", tfiPaintCodesRouter);
app.use("/getData", searchRoute);
app.listen(port, () => {
	console.log("Server listening on port " + port);
});
