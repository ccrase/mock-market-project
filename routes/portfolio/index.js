const router = require("express").Router();
const portfolioRoutes = require("./portfolio");

// portoflio routes
router.use(portfolioRoutes);

module.exports = router;