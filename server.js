const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// init DB
require('dotenv').config()

var db = require("./models");
var MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>console.log("DB connected"));

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// -- API Routes 
apiRoutes(app)

// -- Catch All Route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// console.log that server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

