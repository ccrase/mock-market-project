// const router = require('express').Router();

// //this miidleware will be injected below - between ('/' and (req, res) below)
// //the reason is, we are chcking if they are logged in before making the rest of the function run
// const authCheck = (req, res, next) => {
//     if(!req.user) {
//         //this executes if user is not logged in
//         res.redirect('/auth/login')
//     } else {
//         //if logged in - go on to the middleware below
//         next();
//     }
// };

// router.get('/', (req, res) =>{
//     console.log(req);
//     res.render('/', { user: req.user })
// });

// module.exports = router;