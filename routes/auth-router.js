const router = require('express').Router()


router.get('/login', (req,res) => {
    res.render('login')
})

router.get('/logout', (req,res) => {
    //TO DO
    res.send("Logging out")
})

router.get('/google', (req,res)=> {
    //TO DO
    res.send("Logging in with Google")
})

module.exports = router