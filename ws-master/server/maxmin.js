const express = require('express');
var pool = require('./database');

const maxminRouter = express.Router();

maxminRouter.get('/:last', async (req, res) => {
    try {
      pool.query("SET @@lc_time_names = 'tr_TR'");
      var result = await pool.query("select *,  DAYNAME(tarih) as day from ed_ey_ort_gunluk order by Tarih desc limit " + req.params.last);
    } catch(err) {
      throw new Error(err)
    }
    res.send(result);
  });

  module.exports = maxminRouter;