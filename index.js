const express = require('express')
const bodyparser=require('body-parser')
require('dotenv').config() 
const coursesRouter = require('./routes/courses')
const mongoose=require('mongoose')
const port=8000


const app = express()
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log('Connected to DataBase...')
})
app.use(bodyparser.json())
app.use('/courses',coursesRouter)
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)  
})