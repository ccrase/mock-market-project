const db = require("../models");

console.log("inside usercontroller");
// Defining methods for the booksController
module.exports = {
 
  create: function(req, res) {
      db.User
      .create(req.body)
      .then(dbModel =>console.log(dbModel) )
      .catch(err => res.status(422).json(err));
  }
};

// res.json(dbModel)