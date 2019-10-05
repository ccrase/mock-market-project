const router = require('express').Router();

router.get('/', (req, res) =>{
    console.log(req);
    res.send('Welcome to the first day of the rest of your life ' + req.first_name);
});

module.exports = router;