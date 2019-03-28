const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//now router
const nowRouter = require('./now.js');
app.use('/now', nowRouter);

//maxmin router
const maxminRouter = require('./maxmin.js');
app.use('/maxmin', maxminRouter);

//maxminMontly router
const maxminMonthlyRouter = require('./maxminMonthly.js');
app.use('/maxminMonthly', maxminMonthlyRouter);


