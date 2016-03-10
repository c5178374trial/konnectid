var express = require('express');
var router = express.Router();

var TodoList = require('../models/todolists'),
  TodoItem = require('../models/todos');


// welcome page
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Konnektid test assignment'});
});

// get all lists of todos
router.get('/lists', function (req, res, next) {
  TodoList.find({}, function (err, lists) {
    res.json(lists || []);
  });
});

// get todos by list id
router.get('/list/:id', function (req, res, next) {
  TodoItem.find({lists: req.params.id}, function (err, items) {
    if (items) {
      res.json(items);
    } else {
      res.statusCode(404);
    }
  })
});

// create list
router.post('/list', function (req, res, next) {
  TodoList.create({
    title: req.body.title || '',
    description: req.body.description || ''
  }, function (err, todoList) {
    if (err) {
      res.status(400).end();
    } else {
      res.status(201).json(todoList);
    }
  })
});

// delete list by id
router.delete('/list/:id', function (req, res, next) {
  TodoList.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).end()
    }
  });
});

// get details of specific todo task
router.get('/task/:id', function (req, res, next) {
  TodoItem.findById(req.params.id, function (err, item) {
    if (item) {
      res.json(item);
    } else {
      res.status(404).end();
    }
  })
});

// create todo to specified list
router.post('/task', function (req, res, next) {
  // TODO: need validation for lists existence
  TodoItem.create({
    title: req.body.title || '',
    description: req.body.description || '',
    lists: req.body.lists || []
  }, function (err, item) {
    console.log(err, item);
    if (err) {
      res.status(400).end();
    } else {
      res.status(201).json(item);
    }
  });
});

// endpoint for toggling todo state
router.put('/task/:id/toggle', function (req, res, next) {
  TodoItem.findById(req.params.id, function (err, item) {
    item.toggle();
    if (err) {
      res.status(400).end();
    } else {
      res.json(item);
    }
  })
});

module.exports = router;
