const router = require("express").Router();
const pool = require("../configs/db.config");

const getAllMentees = (db, options) => {
  const queryParams = [];
  let queryString = `SELECT mentees.*, first_name, last_name, email, photo_url, description, skill FROM mentees`;

  if (options.skill) {
    queryParams.push(`%${options.skill}%`);
    queryString += `WHERE skill LIKE $${queryParams};`;
  }
  return db
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllMentees = getAllMentees;

module.exports = (db) => {
  router.get("/dashboard/menteefind", (req, res) => {
    getAllMentees(db, req.url)
      .then((values) => res.send({ values }))
      .catch((err) => {
        console.log(err.message);
      });
  });

  // router.post("/users", (req, res) => {
  //   const userId = req.session.userId;
  //   const options = req.body;
    
  //   getAllMentees(db, req.url)
  //     .then((values) => res.send({ values }))
  //     .catch((e) => {
  //       console.error(e);
  //       res.send(e);
  //     });
  // });
  return router;
};
