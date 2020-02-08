const express = require('express')
const authRouter = require('./routes/auth-router')
const passportSetup = require('./config/passport-config')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express()

app.set('view engine','ejs')

mongoose.connect(keys.mongodb.dbURI, ()=> {
    console.log('connect to mongodb successful!')
})

app.use('/auth',authRouter)
app.get('/',(req,res) => {
    res.render('home')
})

app.listen(3000,() => {
    console.log('listening on port 3000')
})