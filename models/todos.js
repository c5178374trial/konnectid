var mongoose = require('mongoose');

// Create a new schema for our tweet data
var todoItemSchema = new mongoose.Schema({
  lists: [String],
  title: String,
  description: String,
  state: {type: Boolean, default: false}
}, {
  toObject: {virtuals: true},
  toJSON: {virtuals: true}
});

todoItemSchema.methods.toggle = function () {
  this.state = !this.state;
  this.save();
};


// return a model based upon the defined schema
module.exports = mongoose.model('TodoItem', todoItemSchema);

