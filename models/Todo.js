const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    trim: true,
    required: true,
  },
});

const Todo = model('Todo', todoSchema);
module.exports = Todo;
