const Todo = require('../models/Todo');
const ObjectId = require('mongodb').ObjectId;

// add new todo
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
    next(error);
  }
}

// change todo status
async function changeStatusHandler(req, res, next) {
  try {
    const id = req.params.id;
    const query = { _id: id, email: req.email };

    const todo = await Todo.findOne(query);
    const status = todo.status === 'Pending' ? 'Completed' : 'Pending';

    const result = await Todo.findOneAndUpdate(query, {
      $set: {
        status,
      },
    });
    if (result) {
      return res.redirect('/');
    }
  } catch (error) {
    next(error);
  }
}

// update the task
const updateTaskHandler = async (req, res, next) => {
  try {
    const { title, priority, date, taskId } = req.body;
    // console.log(title, priority, date, taskId);
    const task = {
      title,
      priority,
      date,
    };
    const result = await Todo.findOneAndUpdate({ _id: taskId }, task);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
};

// exports
module.exports = {
  addTodoHandler,
  deleteTodoHandler,
  changeStatusHandler,
  updateTaskHandler,
};
