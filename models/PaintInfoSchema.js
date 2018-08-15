// server/models/Article.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let PaintInfoSchema = new Schema(
    {
    	companyName: String,
        curtainCodes: String,
        sinageCodes: String,
        Notes: String,
        Method: String,
    }
);


module.exports = mongoose.model('PaintInfo', PaintInfoSchema)