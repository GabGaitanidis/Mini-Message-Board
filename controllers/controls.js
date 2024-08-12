const db = require("../db");
const { validationResult } = require("express-validator");

async function showMessages(req, res) {
  const messages = await db.getMessages();
  res.render("index", { messages: messages });
}
async function addMessage(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
    });
  }
  await db.insertMessage(req.body.username, req.body.msg);
  res.redirect("/");
}
module.exports = {
  showMessages,
  addMessage,
};
