var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nickname:{type: String, required: true, trim: true},
  name: {type: String, required: true, trim: true},
  // last_name: {type: String, required: true, trim: true},
  email:{type: String, required: false, trim: true},
  google_id:{type:String, unique: true},
  picture: String,
  account_value: {type: Number, default: 25000},
  Order:  [{ type: Schema.Types.ObjectId, ref: "Order"}],
  Favorites:  [{ type: Schema.Types.ObjectId, ref: "Favories"}]
});


var User = mongoose.model("User", UserSchema);
console.log(User);

module.exports = User;

 