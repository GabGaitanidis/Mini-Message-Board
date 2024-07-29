const epxress = require("express");
const router = epxress.Router();
const { body } = require("express-validator");
const con = require("../controllers/controlls");

router.get("/", con.displayMsgs);
router.get("/new", (req, res) => {
  res.render("form");
});
router.post(
  "/",
  body("messageUser").notEmpty().escape().withMessage("Name cannot be empty"),
  con.addMessages
);
module.exports = router;
