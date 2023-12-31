const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
// const multer = require('multer')
const app = express()


//connect db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, () => console.log('MonogDB has been started successfully.'))


//routes
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', authController)
app.use('/blog', blogController)



//connect server

app.listen(process.env.PORT, () => console.log(`Server has been started successfully `))
