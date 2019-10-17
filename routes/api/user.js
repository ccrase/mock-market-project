const router = require("express").Router();
const userController = require("../../controller/userController");


//Matches with "/api/stocks"
router.route("/user")
  .post(userController.findOrCreate);
  
module.exports = router;