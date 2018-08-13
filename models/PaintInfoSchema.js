// server/models/Article.js
const mongoose = require('mongoose')
let PaintInfoSchema = new mongoose.Schema(
    {
    	companyName: String,
        curtainCodes: String,
        sinageCodes: String,
        Notes: String,
        Method: String,
    }
);

module.exports = mongoose.model('PaintInfo', PaintInfoSchema)