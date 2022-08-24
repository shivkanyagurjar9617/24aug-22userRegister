const express = require('express');
const { userController } = require('../controllers/userController');
const userRoute = express.Router()


userRoute.post('/user',userController)
module.exports = {userRoute};