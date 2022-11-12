const express = require('express');
const path = require('path');

const router = require('./routes/router');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.resolve(__dirname, '../client/pages')));

app.use('/auth', router);

// Serve login page at root
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/pages/index.html'));
});

// 404 page handler
app.use('*', (req, res, next) => {
  return res.sendStatus(404);
});
//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  let errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  console.log('Raw error:', err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
module.exports = app;
