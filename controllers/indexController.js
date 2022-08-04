const Todo = require('../models/Todo');

async function indexHandler(req, res, next) {
  try {
    const todos = await Todo.find({ email: req.email });
    return res.render('index', { todos });
  } catch (error) {
    next(error);
  }
}

module.exports = indexHandler;
