var should = require("should");
var mongoose = require('mongoose');
var TodoList = require("../models/todolists.js");
var db;

describe('TodoList', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/konnectid_test');
    done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var todoList = new TodoList({
      title: 'New list',
      description: 'List description'
    });

    todoList.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });

  it('find that lists exists', function(done) {
    TodoList.find({}, function(err, items) {
      items.length.should.eql(1);
      console.log("   total items: ", items.length);
      done();
    });
  });

  afterEach(function(done) {
    TodoList.remove({}, function() {
      done();
    });
  });

});
