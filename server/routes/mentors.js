const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM mentors`).then(({ rows: mentors }) => {
      response.json(mentors);
    });
  });

  return router;
};
