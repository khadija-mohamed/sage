const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.post('/', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  return router;
}