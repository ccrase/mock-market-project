const router = require("express").Router();
<<<<<<< HEAD
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
=======
const stockRoutes = require("./stocks");

// stock routes

router.use(stockRoutes);


module.exports = router;
>>>>>>> 19d1b946b8e37ae59de26c7c19a324385cb253ce
