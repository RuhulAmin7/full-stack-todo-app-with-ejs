const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Todo = model('Todo', todoSchema);
module.exports = Todo;
