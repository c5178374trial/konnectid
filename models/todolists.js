var mongoose = require('mongoose');

// Simple schema that represents list of todos
var todoListSchema = mongoose.Schema({
  title: String,
  description: String
});

// return a model based upon the defined schema
module.exports = mongoose.model('TodoList', todoListSchema);
