const express = require('express');

const insightsRouter = require('./routers/insights');

const app = express();
// middleware
app.use('/insights', insightsRouter)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

// routes



module.exports = app;
