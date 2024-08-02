const express = require("express");
const app = express();
const path = require("path");
const testRoute = require("../routes/indexRoute");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", testRoute);
app.listen(8000);
