const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
const stockRoutes = require("./stocks");

// stock routes

router.use(stockRoutes);

module.exports = router;
