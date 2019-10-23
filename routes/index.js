const router = require("express").Router();
const apiRoutes = require("./api");
const portfolioRoutes = require('./portfolio/index');

// API Routes
router.use("/api", apiRoutes);

// Routes
router.use("/portfolio", portfolioRoutes);



module.exports = router;
