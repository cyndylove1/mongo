
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/DB')
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
 


connectDB()
const app = express()
// app.use(express.json());
app.use(express.urlencoded({extended: false}));
// const controllers = require('./controllers/goalcontroller')




app.use(bodyParser.json())
app.use('/api/employee', require('./route/employeeRoute'))


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

}) ;