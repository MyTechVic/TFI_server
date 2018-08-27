// server/models/Article.js
const mongoose = require('mongoose')
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
            required: true,
            index: true,
    		type: String
    	},
        curtainCodes: {
            required: true,
            index: true,
        	type: String
        },
        sinageCodes: {
            required: true,
            index: true,
        	type: String
        },
        Notes: {
            required: true,
            index: true,
        	type: String
        },
        Method: {
            required: true,
            index: true,
        	type: String
        },
    },{
      collection: 'tfiPaintCodes'
    });

module.exports = mongoose.model('PaintInfoSchema', PaintInfoSchema)

