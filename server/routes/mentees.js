// const router = require("express").Router();

// const bcrypt = require('bcrypt');

// const mentees = ["Carmen", "Khadija", "Ashley", "Josh", "Louis"];

// module.exports = (db) => {
//   // all routes will go here
//   router.get("/", (req, res) => {
//     res.json(mentees);
//   });

//   /* GET login page. */
//   router.get("/login", (req, res) => {
//     res.render("login");
//   });

//   return router;
// };


const router = require('express').Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM mentees`).then(({ rows: mentees }) => {
      response.json(
        //  mentors.reduce(
        //   (previous, current) => ({ ...previous, [current.id]: current }),
        //   {}
        // )
       mentees
      );

    });
  });


  return router;
}