const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')

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
        } else {
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save().then((newUser) => {
                console.log('new user created: '+ newUser)
            })
        }
   })
 
})
)