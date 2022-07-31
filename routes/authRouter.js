const { Router } = require('express');
const {
  registerPageHandler,
  loginPageHandler,
  registerUser,
  loginUser,
} = require('../controllers/authController');
const authRouter = Router();

// register page handler
authRouter.get('/register', registerPageHandler);

// register form handler
authRouter.route('/register').post(registerUser);

// login page handler
authRouter.get('/login', loginPageHandler);

//login form handler
authRouter.post('/login', loginUser);

module.exports = authRouter;
