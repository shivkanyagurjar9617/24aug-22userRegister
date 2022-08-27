const { Schema } = require("mongoose");
const { mongoose } = require("../config/dataBase");


let userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true,
        description:'plese enter these field'
    },
    email:{
        type:String,
        required:true,
        description:'plese enter email field'
    },
    password:{
        type:String,
        required:true,
        description:'plese enter password field'
    },
    userName:{
        type:String,
        required:true,
        description:'plese enter username field'
    },
    role:String,
    
},{
    timestamps:true,
})
const User = mongoose.model('User', userSchema);
module.exports = {User}