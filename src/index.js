const express = require('express');
const { userRoute } = require('./routes/userRoute');

const app = express();
require('dotenv').config()

app.use(express.json())
app.use(userRoute)
let port = process.env.PORT
app.listen(port,()=>{
    console.log('listen on port',port)
})