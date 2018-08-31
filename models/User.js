// server/models/Article.js
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

  // Create schema
 const UserInfoSchema =  new Schema({
        email: {
            required: true,
            index: true,
            unique: true,
            type: String
        },
    	password: {
            index: true,
    		type: String
    	},
    },{
      collection: 'users'
    });


UserInfoSchema.plugin(uniqueValidator);
const User = mongoose.model('users', UserInfoSchema)

module.exports = User;