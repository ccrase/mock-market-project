const express = require('express');
const cors = require("cors");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport');
const port = process.env.PORT || 5000;


const authRoutes = require('./routes/auth/auth');
const portfolioRoutes = require('./routes/portfolio');
const passportSetup = require('./config/passport-setup');

//set up view engine
app.set('view engine', 'ejs')


//DONT KNOW IF THIS IS RIGHT!!!!
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
//   credentials: true
// }));

//this encrypts the cookie
app.use(cookieSession({
  //age is 1 day in milliseconds
  maxAge: 24*60*60*1000,
  keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
//we want to use some routes/middleware
app.use('/auth',authRoutes);
app.use('/portfolio',portfolioRoutes);

// init DB
require('dotenv').config()

// var db = require("./models");
var MONGODB_URI = keys.MONGODB_URI.URL;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>console.log("DB connected"));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('home', {user: req.user});
});

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // -- API Routes 
// apiRoutes(db, app)

// // -- Catch All Route
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });


// console.log that server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

