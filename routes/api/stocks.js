const router = require("express").Router();
const stocksController = require("../../controller/stocksController");



router.route("/stocks")
  .get(stocksController.findAllAPI)
  .post(stocksController.create);
  

router.route("/stocks/load")
 .get(stocksController.findAll);

module.exports = router;