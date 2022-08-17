const Todo = require('../models/Todo');
const User = require('../models/User');

async function indexHandler(req, res, next) {
  try {
    const todos = await Todo.find({ email: req.email });
    const user = await User.find({ email: req.email });
    return res.render('index', { todos, user });
  } catch (error) {
    next(error);
  }
}

module.exports = indexHandler;
