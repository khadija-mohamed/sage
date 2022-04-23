const router = require('express').Router();
const calendar = require('../google')

module.exports = (db) => {
  // all routes will go here 
  router.post('/booking', (req, res) => {
    const { date, description, endTime, mentor, name, startTime } = req.body;

    calendar({ date, description, endTime, mentor, name, startTime })
  });

  return router;
}