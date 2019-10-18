const router = require("express").Router();
const userController = require("../../controller/userController");


//Matches with "/api/user"
router.route("/user")
.post(userController.findOrCreate);

//Matches with "api/user/addfavorite"
router.route("/user/addfavorite")
.post(userController.addFavorite);  
  
module.exports = router;