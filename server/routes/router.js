const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/', authController.logIn, (req, res) => {
  return res
    .status(200)
    .json({ username: res.locals.username, password: res.locals.password });
});

module.exports = router;
