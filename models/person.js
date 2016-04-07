var mongoose = require('mongoose');
mongoose.connect('mongodb://lala:lala@ds015750.mlab.com:15710/lalala');
//mongoose.connect('mongodb://localhost:27017/lalala');

var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  title : String,
  reward:String,
  content  : String


});


module.exports = mongoose.model('Person', personSchema);
//import original data and generate obj
