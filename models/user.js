const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new moongose.Schema({
    firstName:{type: 'String', required: true},
    lastName:{type: 'String', required: true},
    email:{type: 'String', required: true},
    password:{type: 'String', required: true},
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_KEY,expiresIn='7d');
    return token;
}

const User = mongoose.model('user',userSchema);

const validate = (data) => {
}


https://www.youtube.com/watch?v=HGgyd1bYWsE - 7.36