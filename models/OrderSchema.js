var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    ticker_name:{type: String, required: true, trim: true},
    order_type:{type: String, required: true, trim: true},
    per_stock_amount:{type: Number, required: true, trim: true},
    quantity:{type: Number, required: true, trim: true},
    total_amount_invest:{type: Number, required: true, trim: true},
    total_amount_earn:{type: Number, required: true, trim: true}
});


var Order = mongoose.model("Order", OrderSchema);
console.log(Order);

module.exports = Order;