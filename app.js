const express = require('express')
const authRouter = require('./routes/auth-router')
const passportSetup = require('./config/passport-config')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

const app = express()

app.set('view engine','ejs')

app.use(cookieSession({
    maxAge: 24*60*60*1000, //24hrs x 60 min x 60sec x 1000ms
    keys: [keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

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