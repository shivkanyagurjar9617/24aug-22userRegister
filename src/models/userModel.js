const { Schema } = require("mongoose");
const { mongoose } = require("../config/dataBase");


let userSchema = new Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    userName:String
})
const User = mongoose.model('User', userSchema);
module.exports = {User}