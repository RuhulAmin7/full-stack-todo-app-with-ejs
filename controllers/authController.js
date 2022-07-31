const User = require('../models/User');
const bcrypt = require('bcrypt');
const hashStr = require('../utils/hashingPass');
const jwt = require('jsonwebtoken');

const auth = {};
//  register page controller
auth.registerPageHandler = async (req, res) => {
  try {
    res.render('auth/signup');
  } catch (error) {
    throw error;
  }
};
//  register form controller
auth.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password: await hashStr(password),
    });

    const result = await user.save();
    res.render('signupdone');
  } catch (error) {
    throw error;
  }
};

//  login page controller
auth.loginPageHandler = async (req, res) => {
  try {
    await res.render('auth/login', {
      email: null,
      error: null,
      emailError: false,
      passwordError: false,
    });
  } catch (error) {
    throw error;
  }
};
//  login form controller
auth.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      // res.render('index');
      const isMatched = await bcrypt.compare(password, user.password);
      if (isMatched) {
        const token = jwt.sign(
          {
            email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        res.cookie('jwt_token', 'Bearer ' + token, {
          signed: true,
          expiresIn: '1h',
          httpOnly: true,
          secure: true,
        });
        res.redirect('/');
      } else {
        res.render('auth/login', {
          email,
          passwordError: true,
          emailError: false,
          error: 'Wrong password!',
        });
      }
    } else {
      res.render('auth/login', {
        email,
        passwordError: false,
        emailError: true,
        error: 'User not found!',
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = auth;
