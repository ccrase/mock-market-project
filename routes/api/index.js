const router = require("express").Router();
const stockRoutes = require("./stocks");
const userRoutes = require("./user");
const sidebarRoutes = require('./sidebar')

// stock routes
router.use(stockRoutes);

router.use(userRoutes);

router.use(sidebarRoutes);

module.exports = router;
