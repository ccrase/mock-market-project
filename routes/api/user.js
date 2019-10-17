const router = require("express").Router();
const userController = require("../../controller/userController");


//Matches with "/api/stocks"
router.route("/user")
  .post(userController.findOrCreate);
  

// router.route("/load")  
//   .get(stocksController.findAll);

// Matches with "/api/stocks/:id"
// router.route("/:id")
// .get(booksController.findAll);

module.exports = router;