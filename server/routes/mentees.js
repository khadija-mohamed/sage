const router = require('express').Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM mentees`).then(({ rows: mentees }) => {
      response.json(
       mentees
      );

    });
  });
  return router;
}
