//this allows us to create an instace of a router which we can attach routes to in the file - then we export and use these in the server.js
const router = require('express').Router();

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
router.get('/google',(req, res) => {
//HANDLE WITH PASSPORT
res.send('logging in with google');
});

module.exports = router;