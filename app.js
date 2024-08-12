const express = require("express");
const controls = require("./controllers/controls");
const { body } = require("express-validator");

const app = express();
const testRoute = require("./routes/routes");

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/new", (req, res) => {
  res.render("form");
});
app.post(
  "/new",
  body("username").notEmpty().escape().withMessage("Name cannot be empty"),
  controls.addMessage
);
app.get("/", testRoute);
app.listen(8080);
