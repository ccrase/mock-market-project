const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
 app.use(routes);
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/reactstocksmarket", { useNewUrlParser: true });

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactstocklist";
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
