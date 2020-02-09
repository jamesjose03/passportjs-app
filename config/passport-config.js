const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')


//To setup cookie
passport.serializeUser((user,done)=> {
    done(null,user.id)
})

passport.deserializeUser((id,done)=> {
    User.findById(id).then((user)=> {
        done(null,user)
    })
 
})

passport.use(
    new GoogleStrategy({
    //options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret 
}, (accessToken, refreshToken, profile, done) => {
    //Profile exists or not
   User.findOne({googleID: profile.id}).then((currentUser) =>{
        if(currentUser){
            console.log('user is ',currentUser)
            done(null, currentUser)
        } else {
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save().then((newUser) => {
                console.log('new user created: '+ newUser)
                done(null, newUser) //null as no error is assumed
            })
        }
   })
 
})
)