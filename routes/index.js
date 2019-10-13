const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
const apiRoutes = require("./api");
const authRoutes = require("./auth/auth");

// API Routes
router.use("/api", apiRoutes);

router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


module.exports = router;
=======
const apiRoutes = require("./api/index");

// API Routes

router.use(apiRoutes);


module.exports = router;
>>>>>>> 19d1b946b8e37ae59de26c7c19a324385cb253ce
