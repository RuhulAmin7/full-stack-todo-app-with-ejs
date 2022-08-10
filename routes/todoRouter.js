const express = require('express');
const {
  addTodoHandler,
  deleteTodoHandler,
  changeStatusHandler,
  updateTaskHandler,
} = require('../controllers/todoController');
const { authChecker } = require('../middlewares/auth/authMiddleware.js');
const todoRouter = express.Router();

// add a new task
todoRouter.post('/addnewtask', authChecker, addTodoHandler);

// delete a task
todoRouter.get('/deletetask/:id', authChecker, deleteTodoHandler);

// delete a task
todoRouter.get('/changestatus/:id', authChecker, changeStatusHandler);
// delete a task
todoRouter.post('/updatetask', authChecker, updateTaskHandler);

module.exports = todoRouter;
