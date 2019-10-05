//this allows us to create an instace of a router which we can attach routes to in the file - then we export and use these in the server.js
const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login',(req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
 //HANDLE WITH PASSPORT
 res.send('logging out');
});

//auth with google --- this sends the user to the google page
router.get('/google',passport.authenticate('google', {
    //look at the google API to capture other stuff - just comma seperate them
    scope:['profile']


}));

//callback routes for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/portfolio/');
});

module.exports = router;