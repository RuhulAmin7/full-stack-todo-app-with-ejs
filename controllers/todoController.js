const Todo = require('../models/Todo');
const ObjectId = require('mongodb').ObjectId;

async function addTodoHandler(req, res, next) {
  try {
    const todo = new Todo({
      title: req.body.title,
      priority: req.body.priority,
      date: req.body.date,
      status: 'Pending',
      email: req.email,
    });
    const result = await todo.save();
    res.redirect('/');
  } catch (error) {
    // throw new Error(error.message);

    next(error);
  }
}

// delete todo
async function deleteTodoHandler(req, res) {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id), email: req.email };
    const result = await Todo.findOneAndDelete(query);
    if (result) {
      return res.redirect('/');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { addTodoHandler, deleteTodoHandler };
