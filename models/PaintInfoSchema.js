// server/models/Article.js
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

  // Create schema
 const PaintInfoSchema =  new Schema({
        customerID: {
            required: true,
            index: true,
            unique: true,
            type: String
        },
    	companyName: {
            index: true,
    		type: String
    	},
        curtainCodes: {
            index: true,
        	type: String
        },
        sinageCodes: {
            index: true,
        	type: String
        },
        Notes: {
            index: true,
        	type: String
        },
        Method: {
            index: true,
        	type: String
        },
    },{
      collection: 'tfiPaintCodes'
    });
PaintInfoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('PaintInfoSchema', PaintInfoSchema)

