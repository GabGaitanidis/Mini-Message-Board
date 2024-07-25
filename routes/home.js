const epxress = require("express");
const router = epxress.Router();
const format = require("../controllers/formatTime");

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

router.post("/", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: format(new Date()),
  });
  res.redirect("/");
});
module.exports = router;
