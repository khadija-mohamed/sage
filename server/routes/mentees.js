const router = require("express").Router();

const bcrypt = require('bcrypt');

const mentees = ["Carmen", "Khadija", "Ashley", "Josh", "Louis"];

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    res.json(mentees);
  });

  /* GET login page. */
  router.get("/login", (req, res) => {
    res.render("login");
  });

  return router;
};
