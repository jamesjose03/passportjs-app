const express = require('express')
const authRouter = require('./routes/auth-router')
const passportSetup = require('./config/passport-config')

const app = express()

app.set('view engine','ejs')
app.use('/auth',authRouter)
app.get('/',(req,res) => {
    res.render('home')
})

app.listen(3000,() => {
    console.log('listening on port 3000')
})