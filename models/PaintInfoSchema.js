// server/models/Article.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

  // Create schema
 const PaintInfoSchema =  new Schema({
    	companyName: {
    		type: String
    	},
        curtainCodes: {
        	type: String
        },
        sinageCodes: {
        	type: String
        },
        Notes: {
        	type: String
        },
        Method: {
        	type: String
        },
    },{
      collection: 'tfiPaintCodes'
    });

module.exports = mongoose.model('PaintInfoSchema', PaintInfoSchema)

