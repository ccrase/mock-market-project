const express = require('express');
// const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser=require('body-parser');
const mongoose = require("mongoose")
const keys = require('./config/keys')

const PORT = process.env.PORT || 3001;

const routes = require("./routes/index");
const homeRoutes = require('./routes/api/home')

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

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Routes
app.use(routes);
homeRoutes(app)


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