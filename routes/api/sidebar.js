const router = require("express").Router();
const sidebarController = require("../../controller/sidebar");


//Matches with "/api/sidebar"
router.route('/sidebar/:id').get((req, res) => {
    const id = req.params.id
    sidebarController(id, (data)=>{
      res.json(data)
    })
  });

module.exports = router;