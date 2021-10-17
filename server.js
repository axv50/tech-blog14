const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// const session = require("express-session");
// const bcrypt = require("bcrypt");
// const dotenv = require("dotenv");

const server = express();
const port = 5000;

server.engine("handlebars", exphbs());
server.set("view engine", "handlebars");

server.use(express.json());
server.use(express.static(path.join(__dirname, "/public")));

// ROUTES
server.get("/", (req, res) => {
  res.render("home");
});
server.get("/about", (req, res) => {
  res.render("about");
});
server.get("/login", (req, res) => {
  res.render("login");
});
server.get("/signup", (req, res) => {
  res.render("signup");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
