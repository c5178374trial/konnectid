var mongoose = require('mongoose');

// Create a new schema for our todo record
var todoItemSchema = new mongoose.Schema({
  lists: [String],
  title: String,
  description: String,
  state: {type: Boolean, default: false}
});

todoItemSchema.methods.toggle = function () {
  this.state = !this.state;
  this.save();
};


// return a model based upon the defined schema
module.exports = mongoose.model('TodoItem', todoItemSchema);

