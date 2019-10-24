const router = require("express").Router();
const sidebarController = require("../../controller/sidebar");


//Matches with "/api/sidebar"
router.route('/sidebar/:id').get(async(req, res) => {
    const id = req.params.id
    let data = await sidebarController(id)
    console.log(data)
    res.json(data)
  });

module.exports = router;