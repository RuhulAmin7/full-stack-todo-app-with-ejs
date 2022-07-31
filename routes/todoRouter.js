const express = require('express');
const todoRouter = express.Router();

todoRouter.get('/', function (req, res) {
  // console.log(req);
  res.render('index');
});

module.exports = todoRouter;
