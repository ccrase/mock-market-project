var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{type: String, required: true, trim: true},
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  email:{type: String, required: false, trim: true},
  google_id:{type:String, unique: true}

});


var User = mongoose.model("User", UserSchema);


module.exports = User;

