const { User } = require("../models/userModel");

let userController = (req,res)=>{
    console.log(req.body)

    User.findOne({email: req.body.email},function(error, user){

        if(user===null){
            const userObj = new User(req.body);
    
            userObj.save().then(d =>{
                res.status(200).json({
                    msg: "User saved successfully"
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