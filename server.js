const express = require('express');
const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser=require('body-parser');
const mongoose = require("mongoose")
const keys = require('./config/keys')
// const cookieSession = require('cookie-session')
// const passport = require('passport');
const PORT = process.env.PORT || 3001;
// const routes = require("./routes/index");
const routes = require("./routes/index");
const homeRoutes = require('./routes/api/home')
// const authRoutes = require('./routes/auth/auth');
// const portfolioRoutes = require('./routes/portfolio');
// const passportSetup = require('./config/passport-setup');
// init DB
require('dotenv').config()

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mockmarket";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

//set up view engine
// app.set('view engine', 'ejs')

//DONT KNOW IF THIS IS RIGHT!!!!
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
//   credentials: true
// }));

//this encrypts the cookie
// app.use(cookieSession({
//   //age is 1 day in milliseconds
//   maxAge: 24*60*60*1000,
//   keys:[keys.session.cookieKey]
// }));

//initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

//set up routes
//we want to use some routes/middleware
// app.use('/auth',authRoutes);
// app.use('/portfolio',portfolioRoutes);
// Use apiRoutes
app.use(routes);
homeRoutes(app)





// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // -- Catch All Route
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});