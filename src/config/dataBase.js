

const mongoose = require('mongoose');
require('dotenv').config()


//mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.x2agz.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect('mongodb://localhost:27017')
.then((d)=>console.log('connected'))
.catch((e)=>console.log('error'))

module.exports = {mongoose}