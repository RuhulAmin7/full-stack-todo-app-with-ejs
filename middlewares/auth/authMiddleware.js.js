const jwt = require('jsonwebtoken');
// authentication checker function
async function authChecker(req, res, next) {
  try {
    if (req.signedCookies.jwt_token) {
      const token = req.signedCookies.jwt_token.split(' ')[1];
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      req.email = decode.email;
      if (req.url === '/login' || req.url === '/register') {
        return res.redirect('/');
      }
      next();
    } else {
      // res.redirect('/login');
      if (req.url === '/register') {
        return res.render('auth/signup', {
          error: null,
          email: null,
          emailError: false,
          passwordError: false,
        });
      } else {
        res.render('auth/login', {
          error: null,
          email: null,
          emailError: false,
          passwordError: false,
        });
      }
    }
  } catch (error) {
    if (error.message === 'jwt expired') {
      if (req.url === '/register') {
        return res.render('auth/signup', {
          error: null,
          email: null,
          emailError: false,
          passwordError: false,
        });
      } else {
        res.render('auth/login', {
          error: null,
          email: null,
          emailError: false,
          passwordError: false,
        });
      }
    }
    next(error);
  }
}

module.exports = { authChecker };
