var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/populateDB', async function (req, res, next) {

  // Truncate table first
  let truncated = await models.Todo.destroy({truncate: true});

  // Create promises for Todos
  let apple = models.Todo.create({description: 'Eat an apple', dueDate: new Date(), done: true});
  let game = models.Todo.create({description: 'Play The Last of Us Part II', dueDate: new Date('2020/02/22'), done: false});
  let nodejs = models.Todo.create({description: 'Learn Node.js', dueDate: new Date(), done: false});

  // Create dummy data
  let todos = await Promise.all([apple, game, nodejs]);

  console.log('Todos created : ' + JSON.stringify(todos));
  res.redirect('/');

});

module.exports = router;
