const { Router } = require('express');
const {
  registerPageHandler,
  loginPageHandler,
  registerUser,
  loginUser,
  logoutHandler,
} = require('../controllers/authController');
const { authChecker } = require('../middlewares/auth/authMiddleware.js');
const authRouter = Router();

// register page handler
authRouter.get('/register', authChecker, registerPageHandler);

// register form handler
authRouter.post('/register', registerUser);
// authRouter.route('/register').post(registerUser);

// login page handler
authRouter.get('/login', authChecker, loginPageHandler);

//login form handler
authRouter.post('/login', loginUser);

// logout handler
authRouter.get('/logout', logoutHandler);

module.exports = authRouter;
