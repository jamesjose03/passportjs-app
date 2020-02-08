const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
passport.use(
    new GoogleStrategy({
    //options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret 
}, (accessToken, refreshToken, profile, done) => {
    //callback fn
    console.log('callback fn fired')
    console.log(profile)
})
)