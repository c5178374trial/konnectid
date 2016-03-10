var mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

var Account = mongoose.model('Account', {
  username: String,
  password: String
});


Account.plugin(passportLocalMongoose);


// return a models based upon the defined schema
module.exports = Account;

