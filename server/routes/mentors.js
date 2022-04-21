const router = require('express').Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM mentors`).then(({ rows: mentors }) => {
      response.json(
        //  mentors.reduce(
        //   (previous, current) => ({ ...previous, [current.id]: current }),
        //   {}
        // )
       mentors
      );

    });
  });


  return router;
}