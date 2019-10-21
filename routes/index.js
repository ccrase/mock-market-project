const router = require("express").Router();
const apiRoutes = require("./api");
const portfolioRoutes = require('./portfolio');

// API Routes
router.use("/api", apiRoutes);

// API Routes
router.use("/portfolio", portfolioRoutes);



module.exports = router;
