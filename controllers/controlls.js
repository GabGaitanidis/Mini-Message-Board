const { validationResult } = require("express-validator");
const db = require("../db/queries");
async function displayMsgs(req, res) {
  const msgs = await db.getMessages();
  console.log(msgs);
  res.render("index", { messages: msgs });
}
async function addMessages(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
    });
  }

  db.insertMessage(req.body.messageUser, req.body.messageText);
  res.redirect("/");
}
module.exports = {
  displayMsgs,
  addMessages,
};
