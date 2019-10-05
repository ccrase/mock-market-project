const router = require("express").Router();
const stockRoutes = require("./stocks");

// stock routes

router.use(stockRoutes);


module.exports = router;