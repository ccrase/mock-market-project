const db = require("../models");

console.log("inside stockscontroller");
// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
      db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
