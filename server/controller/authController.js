// require in the DB
const authController = {};

authController.logIn = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.username = username;
  res.locals.password = password;
  return next();
};

module.exports = authController;
