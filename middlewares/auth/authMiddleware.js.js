// authentication checker function

function authChecker(req, res, next) {
  try {
    if (req.signedCookies.jwt_token) {
      const token = req.signedCookies.jwt_token.split(' ')[1];
      //   console.log(token);
    } else {
      //   res.redirect('/login');
      res.render('auth/login', {
        error: null,
        email: null,
        emailError: null,
        passwordError: null,
      });
    }
  } catch (error) {
    throw error;
  }
  next();
}

module.exports = { authChecker };
