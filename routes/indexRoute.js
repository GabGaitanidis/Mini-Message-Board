const epxress = require("express");
const router = epxress.Router();
const format = require("../controllers/formatTime");
const { body, validationResult } = require("express-validator");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date()),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
router.get("/new", (req, res) => {
  res.render("form", { messages: messages });
});
router.post(
  "/",
  body("messageUser").notEmpty().escape().withMessage("Name cannot be empty"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
    messages.push({
      text: req.body.messageText,
      user: req.body.messageUser,
      added: format(new Date()),
    });
    res.redirect("/");
  }
);
module.exports = router;
