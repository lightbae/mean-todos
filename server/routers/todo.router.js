var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/todos', function(req, res, next){
  Todo.find({},function(err, foundTodos){
    if(err){
      res.status(500).json({ //return stops cfunction from running further and crashing spp
        err:err
      });
      next();
    }
    res.status(200).json({
      todos: foundTodos
    });
  });
});
router.get('/todos/:id', function(req, res, next){
  Todo.find({_id:req.params.id}, function(err, foundTodo){
    if(err){
      res.status(500).json({
        err:err
      });
      next();
    }
    res.status(200).json({
      todo: foundTodo
    });
  });
});
router.post('/todos', function(req, res, next){
  var todo = new Todo(req.body);
  todo.save(function(err){
    if(err){
      // throww err; dont do dis fr now...
      res.status(500).json({
        err:err
      });
      next();
    }
    res.status(201).json({
      msg: 'successfully creaed todo'
    });
  });
});
router.put('/todos/:id', function(req, res, next){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldTodo){
    if(err){
      res.status(500).json({
        err:err
      });
      next();
    }
    res.status(200).json({
      msg: oldTodo
    });
  });
});
router.delete('/todos/:id', function(req, res, next){
  Todo.findOneAndRemove({_id:req.params.id}, function(err, deletedTodo){
    if(err){
      res.status(500).json({
        err:err
      });
      next();
    }
    res.status(200).json({
      msg: deletedTodo
    });
  });
});
router.get('/todos/description/:desc', function(req, res, next){
  Todo.find({ description: req.params.desc }, function(err, foundTodos){
    if(err){
      res.status(500).json({
        err:err
      });
      next();
    }
    res.status(200).json({
      todos: foundTodos
    });
  });
});

module.exports = router;

//fyi either use if/else, next, or return to handle errors
