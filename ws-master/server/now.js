const express = require('express');
var pool = require('./database');

const nowRouter = express.Router();

nowRouter.get('/', async (req, res) => {
    try {
      var result = await pool.query('select * from sonolcumverisi order by Tarih desc limit 1')
    } catch(err) {
      throw new Error(err)
    }
    res.send(result[0]);
  });

  module.exports = nowRouter;