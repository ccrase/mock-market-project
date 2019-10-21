const router = require("express").Router();
const userController = require("../../controller/userController");
  
//Matches with "/portfolio/findfavorites"
router.route("/findfavorites/:id")
.get(userController.findFavorites); 

//Matches with "/portfolio/findorders"
router.route("/findorders/:id")
.get(userController.findOrders); 

  
module.exports = router;