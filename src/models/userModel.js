const { mongoose } = require("../config/dataBase");


let userD = {
    name:String,
    surname:String,
    email:String,
    password:String,
    userName:String
}
const User = mongoose.model('User', userD);
module.exports = {User}