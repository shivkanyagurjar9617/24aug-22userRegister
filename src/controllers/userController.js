const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


let userController = (req,res)=>{
    console.log(req.body)

    User.findOne({email: req.body.email},function(error, user){

        if(user===null){

            let saltRounds = 10;
            let encPass = bcrypt.hashSync(req.body.password, saltRounds);
            req.body.password = encPass
            const userObj = new User(req.body);
            userObj.save().then(d =>{
            const token = jwt.sign(req.body, process.env.JWT_TOKEN_KEY);
               
                let userDetail = {
                    name:req.body.name,
                    surname:req.body.surname,
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.passwordname,
                    usernames:req.body.username,
                    role:req.body.role,
                    token:token

                }
                delete userDetail.password
                delete userDetail.username
                res.status(200).json({
                    msg: "User saved successfully",
                    userDetail:userDetail
                })
                
                
            }).catch(e=>{
                res.status(404).json({
                    msg: "User not found"
                })
            });
        }else{
                res.status(404).json({
                    msg: "User has already taken"
            })
        }
    })
    
    
    
}

module.exports = {userController}