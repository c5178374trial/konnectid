var mongoose = require('mongoose');

//var TodoItem = require('./todos');

// Simple schema that represents list of todos
var todoListSchema = mongoose.Schema({
  title: String,
  description: String
});

//// helper method that returns all related todos
//todoListSchema.virtual('items').get(function (cb) {
//  return TodoItem.find({list: this._id}).exec(cb);
//});

todoListSchema.methods.createItem = function (title, description, author, cb) {
  return new TodoItem({
    'title': title,
    'description': description,
    'author': author,
    'list': this._id
  }).save(cb);
};

// return a model based upon the defined schema
module.exports = mongoose.model('TodoList', todoListSchema);
