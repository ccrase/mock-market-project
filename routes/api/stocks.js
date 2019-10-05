const router = require("express").Router();
const stocksController = require("../../controller/stocksController");


//Matches with "/api/stocks"
router.route("/api/stocks")
  .post(stocksController.create);
  

// router.route("/load")  
//   .get(stocksController.findAll);

// Matches with "/api/stocks/:id"
// router.route("/:id")
// .get(booksController.findAll);

module.exports = router;