var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FavoritesSchema = new Schema({
    ticker_name:{type: String, required: true, trim: true},
});


var Favorites = mongoose.model("Favorites", FavoritesSchema);
console.log(Order);

module.exports = Favorites;