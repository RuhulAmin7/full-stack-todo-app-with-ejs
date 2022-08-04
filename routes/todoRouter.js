const express = require('express');
const {
  addTodoHandler,
  deleteTodoHandler,
} = require('../controllers/todoController');
const { authChecker } = require('../middlewares/auth/authMiddleware.js');
const todoRouter = express.Router();

// add a new task
todoRouter.post('/addnewtask', authChecker, addTodoHandler);

// delete a task
todoRouter.get('/deletetask/:id', authChecker, deleteTodoHandler);
module.exports = todoRouter;
