const { Router } = require("express");
const controls = require("../controllers/controls");
const router = Router();

router.get("/", controls.showMessages);
router.get("/new", (req, res) => {
  res.render("form");
});

module.exports = router;
