const router = require("express").Router();
const stockRoutes = require("./stocks");
const userRoutes = require("./user");

// stock routes
router.use(stockRoutes);

router.use(userRoutes);

module.exports = router;
