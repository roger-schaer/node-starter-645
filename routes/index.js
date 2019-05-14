var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {

  // Render with dummy data
  let todos = await models.Todo.findAll({});

  res.render('index', { title: 'Todos', todos: todos });
});

module.exports = router;
