var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  description: {
    type: String,
    required: true
  } //we are building a contract here. don't fulfill = fail
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
